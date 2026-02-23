import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Category from '#models/category'

export default class Kind extends BaseModel {
  static table = "t_kinds"

  @column({ isPrimary: true, columnName: 'id_kind' })
  declare id: number

  @column({ columnName: 'kind_name' })
  declare name: string

  // Rélation: un kind(genre) contient plusieurs catégories
  @hasMany(() => Category, { foreignKey: 'fkKind' })
  declare categories: HasMany<typeof Category>
}
