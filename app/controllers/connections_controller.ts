import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class ConnectionsController {
  /**
   *
   */
  async login({ request, response, auth }: HttpContext) {
    const login = request.input('login')
    const password = request.input('password')

    //console.log(request)

    if (!login || !password) {
      return response.ok({
        msgTitle: 'Login',
        msgErr: 'Tous les champs ne sont pas renseignés',
      })
    }

    const inLdap = await this.checkLdapSimulated(login, password)

    if (inLdap !== true) {
      return response.ok({
        msgTitle: 'Login',
        msgErr: 'Les identifiants sont incorrects',
      })
    }

    const user = await User.query().where('id_user', login).first()

    if (!user) {
      return response.ok({
        msgTitle: 'Login',
        msgErr: "Vous n'avez pas accès",
      })
    }

    if (user.actif !== 1) {
      return response.ok({
        msgTitle: 'Login',
        msgErr: 'Votre compte est désactivé',
      })
    }

    await auth.use('web').login(user)

    const referer = request.header('referer') || '/'
    return response.type('text/plain').send(referer)
  }

  private async checkLdapSimulated(_login: string, _password: string) {
    return true
  }

  async logout({ response, auth }: HttpContext) {
    await auth.use('web').logout()

    return response.redirect('/')
  }
}
