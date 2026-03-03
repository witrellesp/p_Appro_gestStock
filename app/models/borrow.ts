import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Article from '#models/article'
import Note from '#models/note'
import User from './user.js'

export default class Borrow extends BaseModel {

  static table = 't_borrows'
  
  @column({ isPrimary: true, columnName: 'id_borr' })
  declare id: number

  @column({ columnName: 'borr_owner' })
  declare owner: string

  @column({ columnName: 'borr_forwho' })
  declare forwho: string

  @column.dateTime({ columnName: 'borr_taken_date' })
  declare taken_date: DateTime

  @column({ columnName: 'borr_returned_visa' })
  declare returned_visa: string

  @column.dateTime({ columnName: 'borr_returned_date' })
  declare returned_date: DateTime

  @column({ columnName: 'borr_reason' })
  declare reason: string

  @column({ columnName: 'borr_location' })
  declare location: string

  @column({ columnName: 'borr_note' })
  declare note: string

  // FK en DB: fk_article : maping fk_article
  @column({ columnName: 'fk_article' })
  declare fkArticle: number

  @belongsTo(() => Article, { foreignKey: 'fkArticle' })
  declare article: BelongsTo<typeof Article>

    // Rélation: un borrow peut avoir plusieurs notes
  @hasMany(() => Note, { foreignKey: 'fkBorrow' })
  declare notes: HasMany<typeof Note>

  
  // Rélation entre borr_owner et le id de User
  @belongsTo(()=> User,{
    foreignKey: 'owner',
    localKey: 'id'

  })
  declare ownerUser: BelongsTo<typeof User>


}
