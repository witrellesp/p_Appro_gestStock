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

    console.log('arrStat', arrStat)

    return view.render('search/index', {
      lstTypes,
      lstMenu,
      arrStat
    })
  }
}
