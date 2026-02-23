import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Chest from '#models/chest'


export default class Room extends BaseModel {
  static table = 't_rooms'
  @column({ isPrimary: true, columnName: 'id_room' })
  declare id: number

  @column({ columnName: 'room_name' })
  declare name: string

  // Rélation: un room peut avoir plusieurs chest 
  @hasMany(() => Chest, { foreignKey: 'fkRoom' })
  declare chest: HasMany<typeof Chest>


}