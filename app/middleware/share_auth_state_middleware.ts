import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'


export default class ShareAuthStateMiddleware {
async handle({ auth, view }: HttpContext, next: () => Promise<void>) {
    const guard = auth.use('web')

    try {
      await guard.authenticate()
    } catch {
      // pas connecté => on ignore
    }

    view.share({
      appState: {
        isAuthenticated: guard.isAuthenticated, 
        user: guard.user,
        isAdministrator: guard.user ? guard.user.group === 1 : false,
      }
    })


    await next()
  }
}