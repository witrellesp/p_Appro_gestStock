import type { HttpContext } from '@adonisjs/core/http'
import Kind from '#models/kind'
import Category from '#models/category'
import Product from '#models/product'
import Article from '#models/article'
import Borrow from '#models/borrow'

export default class SearchController {
  async index({ view }: HttpContext) {
    // Retourne la liste de tous les types d'articles (kinds)
    const lstTypes = await Kind.query().orderBy('name', 'asc')

    // Retourne la liste des catégories selon le type (menu structure)
    const lstMenu = await Category.query()
      .preload('kind')
      .orderBy('name', 'asc')

    // Statistiques: nombre de produits, articles et emprunts actifs
    const [productsCount, articlesCount, activeBorrowsCount] = await Promise.all([
      Product.query().count('id_prod as count').first(),
      Article.query().count('id_arti as count').first(),
      Borrow.query()
        .whereNull('borr_returned_date')
        .count('id_borr as count')
        .first()
    ])

    const arrStat = {
      products: Number(productsCount?.$extras.count),
      articles: Number(articlesCount?.$extras.count),
      borrows: Number(activeBorrowsCount?.$extras.count)
    }

    // préparer les données de recherche (mêmes que search_view)
    const articles = await Article.query()
      .preload('product')
      .preload('borrow')
      .withCount('borrow', (borrowQ) => {
        borrowQ.whereNull('borr_returned_date')
      })
      .preload('chest', (query) => query.preload('room'))
      .orderBy('label', 'asc')

    const rows = articles.map(article => ({
      id: article.id,
      arti_label: article.label,
      prod_name: article.product?.name ?? null,
      prod_description: article.product?.description ?? null,
      room_name: article.chest?.room?.name ?? null,
      chest_name: article.chest?.name ?? null,
      isBorrowed: Number(article.$extras.borrow_count ?? 0) > 0,
    }))

    console.log('arrStat', arrStat)

    return view.render('search/index', {
      lstTypes,
      lstMenu,
      arrStat,
      rows,           
    })
  }


  async search_view({ view }: HttpContext) {
    // Récupère tous les articles avec leurs relations
    const articles = await Article.query()
      .preload('product')
      .preload('borrow')
      .withCount('borrow', (borrowQ) => {
        borrowQ.whereNull('borr_returned_date')
      })
      .preload('chest', (query) => query.preload('room'))
      .orderBy('label', 'asc')

    // Formate les données pour la vue
    const rows = articles.map(article => ({
      id: article.id,
      arti_label: article.label,
      prod_name: article.product?.name ?? null,
      prod_description: article.product?.description ?? null,
      room_name: article.chest?.room?.name ?? null,
      chest_name: article.chest?.name ?? null,
      isBorrowed: Number(article.$extras.borrow_count ?? 0) > 0,
    }))

    console.log('search_view rows count:', rows.length)
    
    return view.render('search/search_view', {
      rows
    })
  }

}
