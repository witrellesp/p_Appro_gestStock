import type { HttpContext } from '@adonisjs/core/http'
import Article from '#models/article'

export default class ArticlesController {

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
        console.log('params',params)

        return response.json(rows)
    }

}