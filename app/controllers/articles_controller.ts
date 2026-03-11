import type { HttpContext } from '@adonisjs/core/http'
import Article from '#models/article'

import Borrow from '#models/borrow'


export default class ArticlesController {

    /**
     * Récupère les détails d'un article spécifique, y compris les informations sur le produit associé.
     * @param response - L'objet de réponse HTTP pour envoyer la réponse au client.
     * @param params - Les paramètres de la requête, notamment l'identifiant de l'article.
     * @returns Une réponse JSON contenant les détails de l'article et du produit associé, ou une erreur si l'article n'est pas trouvé. 
     */
    async get({ response, params }: HttpContext) {
        const idArticle = params.id


        if (!idArticle) {
            return response.badRequest({ message: 'article_id est obligatoire' })
        }

        const article = await Article.query()
            .preload('product')
            .where('id', idArticle)
            .first()

        if (!article) {
            return response.notFound({ message: 'Articles pas trouvé' })
        }

        const rows = {
            arti_label: article?.label,
            prod_picture: article?.product?.picture ?? null,
            prod_name: article?.product?.name ?? null,
            prod_description: article?.product?.description ?? null,
            prod_note: article?.product?.note ?? null,
            arti_note: article?.note ?? null
        }


        console.log('article', article.toJSON ? article.toJSON() : article)
        console.log('params', params)

        return response.json(rows)
    }


    /**
     * Récupère les données nécessaires pour générer un QR code pour un article spécifique, y compris les informations sur le produit associé et l'état d'emprunt de l'article.
     * @param response - L'objet de réponse HTTP pour envoyer la réponse au client.
     * @param params - Les paramètres de la requête, notamment l'identifiant de l'article.
     * @returns Une réponse JSON contenant les détails de l'article, du produit associé, l'état d'emprunt, et le contenu formaté pour le QR code, ou une erreur si l'article n'est pas trouvé.
     */
    async getQrCodeData({ response, params }: HttpContext) {
        const idArticle = params.id

        if (!idArticle) {
            return response.badRequest({ message: 'article_id est obligatoire' })
        }

        try {
            const article = await Article.query()
                .preload('product')
                .preload('chest', (query) => query.preload('room'))
                .where('id', idArticle)
                .first()

            if (!article) {
                return response.notFound({ message: 'Article pas trouvé' })
            }

            // Vérifier si l'article est emprunté
            const isBorrowed = await article.isBorrowed()

            // Récupérer l'emprunt actif si existant
            const activeBorrow = isBorrowed
                ? await article.related('borrow').query().whereNull('borr_returned_date').first()
                : null

            // Préparer le contenu du QR code
            const qrContent = `ETML - Informatique
            -----------------------------------------------
            IDENTIFIANT : ${article.id}
            LABEL : ${article.label}
            PRODUIT : ${article.product?.name ?? 'N/A'}
            DESCRIPTION : ${article.product?.description ?? 'N/A'}
            LOCALISATION : ${article.chest?.room?.name ?? 'N/A'} / ${article.chest?.name ?? 'N/A'}`

            const rows = {
                id: article.id,
                arti_label: article.label,
                prod_picture: article.product?.picture ?? null,
                prod_name: article.product?.name ?? null,
                prod_description: article.product?.description ?? null,
                prod_note: article.product?.note ?? null,
                arti_note: article.note ?? null,
                room_name: article.chest?.room?.name ?? null,
                chest_name: article.chest?.name ?? null,
                isBorrowed: isBorrowed,
                borrower: activeBorrow?.toJSON() ?? null,
                qrContent: qrContent
            }

            return response.json(rows)
        } catch (error) {
            console.error('Error getting QR code data:', error)
            return response.internalServerError({ message: 'Erreur lors de la récupération des données' })
        }
    }

    /**
     * Affiche la vue détaillée d'un article dans une modal
     */
    async view({ params, view }: HttpContext) {
        const idArticle = params.id

        if (!idArticle) {
            return view.render('pages/errors/not_found')
        }

        // Récupérer l'article avec ses relations
        const article = await Article.query()
            .preload('product')
            .preload('borrow')
            .preload('chest', (query) => query.preload('room'))
            .where('id', idArticle)
            .first()

        if (!article) {
            return view.render('pages/errors/not_found')
        }

        // Récupérer les emprunts de l'article
        const borrows = await Borrow.query()
            .where('fkArticle', idArticle)
            .preload('notes')
            .orderBy('borr_taken_date', 'desc')

        // Récupérer les notes des emprunts (emprunts terminés avec notes)
        const borrowsNotes = await Borrow.query()
            .where('fkArticle', idArticle)
            .whereNotNull('borr_returned_date')
            .preload('notes')
            .orderBy('borr_taken_date', 'desc')


        /* console.log('article', article.toJSON ? article.toJSON() : article) */
        /* console.log('isBorrowed', isBorrowed) */
        const isBorrowed = await article.isBorrowed()
        
        return view.render('partials/article_view', {
            article,
            borrows,
            borrowsNotes,
            isBorrowed: isBorrowed
        })
    }

}