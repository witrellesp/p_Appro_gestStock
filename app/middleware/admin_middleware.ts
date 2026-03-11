import type { HttpContext } from '@adonisjs/core/http'



export default class AdminMiddleware {
 public async handle({ auth, response }: HttpContext, next: () => Promise<void>) {
    await auth.use('web').authenticate()

    if (!auth.user?.isAdmin) {
      // On renvoit a la page home si le user n'as pas les accès
      return response.redirect('/')
      //return response.forbidden('Accès interdit')
    }
    
    await next()
  }
}