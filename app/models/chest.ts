import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Room from '#models/room'
import Article from '#models/article'

export default class Chest extends BaseModel {
  static table = 't_chests'
  @column({ isPrimary: true, columnName: 'id_ches' })
  declare id: number

  @column({ columnName: 'ches_name' })
  declare name: string

  // FK en DB: fk_room
  @column({ columnName: 'fk_room' })
  declare fkRoom: number

  @belongsTo(() => Room, { foreignKey: 'fkRoom' })
  declare room: BelongsTo<typeof Room>

  // Rélation: un chest peut avoir plusieurs articles
  @hasMany(() => Article, { foreignKey: 'fkChest' })
  declare article: HasMany<typeof Article>
}
