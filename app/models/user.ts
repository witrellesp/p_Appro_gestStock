
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {

  static table = 't_users'
  @column({ isPrimary: true, columnName: 'id_user' })
  declare id: string

  @column({ columnName: 'user_name' })
  declare name: string

  @column({ columnName: 'user_firstname' })
  declare firstname: string

  @column({ columnName: 'user_group' })
  declare group: number

  @column({ columnName: 'user_actif' })
  declare actif: number


  get isAdmin() {
    return this.group === 1
  }

}