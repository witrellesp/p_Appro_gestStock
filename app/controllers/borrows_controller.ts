import type { HttpContext } from '@adonisjs/core/http'
import Borrow from '#models/borrow'
import Product from '#models/product'

export default class BorrowsController {
  async index({ view, auth }: HttpContext) {
    let totAllBorrow = 0
    let totMyBorrow = 0

    const isLogged = await auth.use('web').check()

    if (isLogged) {
      const user = auth.use('web').user!
      const userId = user?.id
      const myBorrows = await Borrow.query().where('borr_owner', userId)
      totMyBorrow = myBorrows.length
    }

    const allBorrows = await Borrow.query()
    totAllBorrow = allBorrows.length

    // TODO : A VOIR COMMENT FAIRE UNE INDEX 
      const borrows = await Borrow.query()
    .preload('article', (q) =>
      q.preload('product', (q) =>
        q.preload('category', (q) =>
          q.preload('kind')
        )
      )
    )

  const borrowsView = borrows.map((b) => ({
    borrow: b,
    kindName: b.article?.product?.category?.kind?.name ?? null,

  }))

    return view.render('borrow/index', {
      totAllBorrow,
      totMyBorrow,
      borrowsView
    })
  }

  /**
   * List d'emprunts
   */
  async view({ view }: HttpContext) {
    const borrows = await Borrow.query().preload('article', (articleQuery) => {
      articleQuery.preload('product', (productQuery) => {
        productQuery.preload('category', (categoryQuery) => {
          categoryQuery.preload('kind')
        })
      })
    })

    const borrowsView = borrows.map((b) => {
      const kindName = b.article?.product?.category?.kind?.name ?? null

      return {
        borrow: b,
        kindName,
      }
    })

    console.log('borrowsView',borrowsView)


    return view.render('borrow/view', { borrowsView })
  }
}
