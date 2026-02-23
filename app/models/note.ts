import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Borrow from '#models/borrow'

export default class Note extends BaseModel {

  static table = 't_notes'
  @column({ isPrimary: true, columnName: 'id_note' })
  declare id: number

  @column({ columnName: 'date' })
  declare date: DateTime

  @column({ columnName: 'note_author' })
  declare author: string

  @column({ columnName: 'note_description' })
  declare description: string

  //fk en db : fk_borrow
  @column({ columnName: 'fk_borrow' })
  declare fkBorrow: number

  @belongsTo(() => Borrow, { foreignKey: 'fkBorrow' })
  declare borrow: BelongsTo<typeof Borrow>
}
