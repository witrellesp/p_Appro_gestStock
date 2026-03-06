import type { HttpContext } from '@adonisjs/core/http'
import Borrow from '#models/borrow'


export default class BorrowsController {
  async index({ view, auth }: HttpContext) {
    let totAllBorrow = 0
    let totMyBorrow = 0

    const isLogged = await auth.use('web').check()

    if (isLogged) {
      const user = auth.use('web').user!
      const userId = user?.id
      const myBorrows = await Borrow.query().where('borr_owner', userId).whereNull('borr_returned_visa')
      totMyBorrow = myBorrows.length
    }

    const allBorrows = await Borrow.query().whereNull('borr_returned_visa')
    totAllBorrow = allBorrows.length


    const borrowsView = await this.getBorrowsView()

    const userId = auth.use('web').user!.id
    const myborrowsView = await this.getMyBorrowsView(userId)



    return view.render('borrow/index', {
      totAllBorrow,
      totMyBorrow,
      borrowsView,
      myborrowsView

    })
  }

  private async getBorrowsView() {
    // TODO : A VOIR COMMENT FAIRE UNE INDEX 
    const borrows = await Borrow.query()
      .preload('ownerUser')
      .preload('article', (articleQ) => {
        articleQ
          .preload('product', (productQ) => {
            productQ
              .preload('category', (categoryQ) => {
                categoryQ.preload('kind')
              })
              .preload('maker')
          })
          .preload('chest', (chestQ) => {
            chestQ.preload('room')
          })
      })

    const rows = borrows.map((b) => {
      const a = b?.article
      const p = a?.product
      const c = p?.category
      const k = c?.kind
      const owner = b?.ownerUser
      const chest = a?.chest
      const r = chest?.room

      return {
        kind_name: k.name ?? '',
        prod_name: p.name ?? '',
        cate_name: c.name ?? '',
        arti_label: a.label ?? '',
        arti_id: a.id ?? '',

        user_name: owner.name ?? '',
        user_firstname: owner.firstname ?? '',
        borr_forwho: b.forwho ?? '',
        borr_id: b.id ?? '',
        borr_location: b.location ?? '',
        room_name: r.name ?? '',
        ches_name: chest.name ?? '',
        borr_taken_date: b.taken_date ? b.taken_date.toFormat('dd-MM-yyyy') : null,
        borr_returned_visa: b.returned_visa ?? null,


      }
    })
    return rows
  }


  private async getMyBorrowsView(id: string) {
    // TODO : A VOIR COMMENT FAIRE UNE INDEX 

    const borrows = await Borrow.query()
      .where('borr_owner', id)
      .preload('ownerUser')
      .preload('article', (articleQ) => {
        articleQ
          .preload('product', (productQ) => {
            productQ
              .preload('category', (categoryQ) => {
                categoryQ.preload('kind')
              })
              .preload('maker')
          })
          .preload('chest', (chestQ) => {
            chestQ.preload('room')
          })
      })

    const rows = borrows.map((b) => {
      const a = b?.article
      const p = a?.product
      const c = p?.category
      const k = c?.kind
      const owner = b?.ownerUser
      const chest = a?.chest
      const r = chest?.room

      return {
        kind_name: k.name ?? '',
        prod_name: p.name ?? '',
        cate_name: c.name ?? '',
        arti_label: a.label ?? '',
        arti_id: a.id ?? '',

        user_name: owner.name ?? '',
        user_firstname: owner.firstname ?? '',
        borr_forwho: b.forwho ?? '',
        borr_id: b.id ?? '',
        borr_location: b.location ?? '',
        room_name: r.name ?? '',
        ches_name: chest.name ?? '',
        borr_taken_date: b.taken_date ? b.taken_date.toFormat('dd-MM-yyyy') : null,
        borr_returned_visa: b.returned_visa ?? null,


      }
    })
    return rows
  }

  /**
   * List d'emprunts
   */
  async view({ view }: HttpContext) {


    const borrowsView = await this.getBorrowsView()

    console.log('borrowsView', borrowsView)


    return view.render('borrow/view', { borrowsView })
  }


  /**
 * List de mes emprunts
 */
  async myborrow({ view, auth }: HttpContext) {

    const userId = auth.use('web').user!.id
    const myborrowsView = await this.getMyBorrowsView(userId)

    console.log('myborrowsView', myborrowsView)

    return view.render('myborrowsView', { myborrowsView })
  }

  /*
  * Ajout d'un emprunt
  */
  async add({ request, response, params }: HttpContext) {
    const idArticle = params.id

    const takenVisa = request.input('taken_visa')
    const takenForWho = request.input('taken_forwho_visa')
    const takenDate = request.input('hideBorrDtPicker')
    const takenReason = request.input('taken_reasen')
    const takenPlace = request.input('taken_place')

    const arrError = { msgErr: '' }

    try {

      await Borrow.create({
        owner: takenVisa,
        forwho: takenForWho,
        taken_date: takenDate,
        reason: takenReason,
        location: takenPlace,
        fkArticle: idArticle
      }

      )

      //return response.json({ debug: 'add hit' })
      return response.json(arrError)

    } catch (error) {

      console.log('BORROW ADD ERROR', error)
      arrError.msgErr = 'Erreur lors de l’ajout'
      return response.status(500).json(arrError)
    }
  }

  /**
   * Retour d'un emprunt
   */
  async back({ request, response, params }: HttpContext) {
    const idBorrow = params.id

    const takenVisa = request.input('taken_visa')
    const returnedDate = request.input('hideBorrDtPicker')

    const returnedNote = request.input('taken_note')

    const arrError = { msgErr: '' }

    try {
      const borrow = await Borrow.find(idBorrow)
      

      if (!borrow) {
        return response.notFound({ msgErr: "Emprunt introuvable" })
      }

      borrow.returned_visa = takenVisa
      borrow.returned_date = returnedDate
      borrow.note = returnedNote

      await borrow.save()

      return response.json(arrError)

    } catch (error) {
      console.error(error)
      return response.status(500).json({ msgErr: "Erreur lors du retour" })
    }



  }


}
