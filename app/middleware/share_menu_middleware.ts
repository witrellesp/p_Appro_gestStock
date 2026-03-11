import type { HttpContext } from '@adonisjs/core/http'

import { getMenu } from '#services/menu_service'

export default class ShareMenuMiddleware {
  async handle({view}:HttpContext, next:()=> Promise<void>) {

    const menuTree = await getMenu()

    view.share({menuTree})

    await next()
  }
}