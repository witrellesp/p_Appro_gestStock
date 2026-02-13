import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'


export default class GestionsController {

    async index({ view }: HttpContext) {

        const kinds = await db
            .from('t_kinds')
            .select('id_kind', 'kind_name')
            .orderBy('kind_name', 'asc')
        return view.render('gestion/gest_tables', {
            state: {
                title: 'Gestion',
                // sans auth pour l'instant
                isAuthenticated: false,
                isAdministrator: true,
            },
            kinds
        })
    }

    /**
   * Display a list of resource GENRE
   */
    async kind_view({ view }: HttpContext) {

        const kinds = await db
            .from('t_kinds')
            .select('id_kind', 'kind_name')
            .orderBy('kind_name', 'asc')

        return view.render('gestion/kinds/index', {
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
    async kind_add({ view }: HttpContext) {

        return view.render('gestion/kinds/create', {
            state: {
                title: 'Ajout un genre',
                isAuthenticated: false,
                isAdministrator: true
            }
        })

    }


    /**
     * Handle form submission for the create action
     */
    async submit_add_Kind({ request, response }: HttpContext) {

        const kindName = (request.input('kind_name') || '').trim()
        if (!kindName) {
            return response.badRequest('kind_name est requis')
        }

        await db.table('t_kinds').insert({
            kind_name: kindName
        })

        return response.redirect().toPath('/gest_tables')

    }


    /**
    * Edit individual record
    */
    async kind_edit({ params, view }: HttpContext) {

        const kind = await db.from('t_kinds').where('id_kind', params.id).first()

        if (!kind) {
            return view.render('pages/errors/not_found')
        }

        return view.render('gestion/kinds/edit', {
            state: {
                title: 'Edition genre',
                isAuthenticated: false,
                isAdministrato: true
            }
            , kind
        })

    }

    /**
     * Handle form submission for the edit action
     */
    async submit_edit_Kind({ params, request, response }: HttpContext) {

        const data = request.only(['kind_name'])

        await db.from('t_kinds').where('id_kind', params.id).update(data)

        return response.redirect().toPath('/gest_tables')
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

        if (hasCategories) {
            // si le genre a des categories
            session.flash('error', 'Impossible de supprimer: des catégories utilisent ce genre.')
            return response.redirect().toPath('/gest_tables')
        }
        if (!id) {
            return response.badRequest('Invalid ID')
        }


        await db.from('t_kinds').where('id_kind', id).delete()
        session.flash('success', 'Genre supprimé.')
        return response.redirect().toPath('/gest_tables')
    }



}