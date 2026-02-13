import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class KindsController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    // Ici il faut charger tous les entités nécessaires
    const kinds = await db
      .from('t_kinds')
      .select('id_kind', 'kind_name')
      .orderBy('kind_name', 'asc')

    return view.render('/gestion/kinds/index', {
      state: {
        title: 'Gestion - Kinds',
        // sans auth pour l'instant
        isAuthenticated: false,
        isAdministrator: true,
      },
      kinds,
    })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {

    return view.render('gestion/kinds/create')
    /*
    {
      state: {
        title: 'Ajout un genre',
        isAuthenticated: false,
        isAdministrator: true
      }
    })*/
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {

    const kindName = (request.input('kind_name') || '').trim()
    if (!kindName) {
      return response.status(404).send('kind_name est requis')
    }

    await db.table('t_kinds').insert({
      kind_name: kindName
    })

    return response.redirect().toPath('/kind/view')

  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) { }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {

    const kind = await db.from('t_kinds').where('id_kind', params.id).first()

    if (!kind) {
      return view.render('pages/errors/not_found')
    }

    return view.render('gestion/kinds/edit', { kind })

  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {

    const data = request.only(['kind_name'])

    await db.from('t_kinds').where('id_kind', params.id).update(data)

    return response.redirect().toPath('/gestion/gest_tables')
  }


  /**
   * Delete record
   */
  async destroy({ params, response, session }: HttpContext) {
    const id = params.id

    const hasCategories = await db
      .from('t_categories')
      .where('fk_kind', id)
      .first()

    console.log(id)
    console.log(hasCategories)
    if (hasCategories) {
      // si le genre a des categories
      session.flash('error', 'Impossible de supprimer: des catégories utilisent ce genre.')
      return response.redirect().toPath('/kind/view')
    }
    if (!id) {
      return response.badRequest('Invalid ID')
    }


    await db.from('t_kinds').where('id_kind', id).delete()
    session.flash('success', 'Genre supprimé.')
    return response.redirect().toPath('/kind/view')
  }
}