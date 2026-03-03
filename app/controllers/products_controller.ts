import Article from '#models/article'
import Borrow from '#models/borrow'
import Category from '#models/category'
import Kind from '#models/kind'
import Product from '#models/product'
import { getMenu } from '#services/menu_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async index({ request, view }: HttpContext) {
    const categoryId = Number(request.input('categoryId'))

    //ToDO : faut voir si on passe les articles ou les produits comme parametres
    const menu = await Category.query().where('id', categoryId).preload('kind').first()



    const articles = await Article.query()
      .whereHas('product', (q) => {
        q.where('fkCategory', categoryId)
      })
      .preload('product', (productQ) => {
        productQ.preload('category', (categoryQ) => {
          categoryQ.preload('kind')
        })
      })
      .preload('chest', (chestQ) => {
        chestQ.preload('room')
      })
      .preload('borrow', (borrowQ) => {
        borrowQ.preload('notes')
        borrowQ.preload('ownerUser')

      })
      .withCount('borrow', (borrowQ) => {
        borrowQ.whereNull('borr_returned_date')
      })


    const rows = articles.map((a) => ({
      ...a.serialize(),
      isBorrowed: Number(a.$extras.borrow_count ?? 0) > 0,
      ownerUserName: a.borrow?.[0]?.ownerUser.name ?? null,
      user: a.borrow?.[0]?.ownerUser ?? null,
      borrow: a.borrow?.[0] ?? null 
    }))



    const products = await Product.query()
      .where('fkCategory', categoryId)
      .orderBy('name', 'asc')

    
    return view.render('articl/index', {
      menu,
      articles: rows,
      products,
    })
  }
}
