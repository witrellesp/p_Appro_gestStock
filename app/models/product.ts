import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Maker from '#models/maker'
import Category from '#models/category'
import Article from '#models/article'

export default class Product extends BaseModel {
  static table = 't_products'

  @column({ isPrimary: true, columnName: 'id_prod' })
  declare id: number

  @column({ columnName: 'prod_name' })
  declare name: string

  @column({ columnName: 'prod_description' })
  declare description: string

  @column({ columnName: 'prod_picture' })
  declare picture: string

  @column({ columnName: 'prod_note' })
  declare note: string

  // FK en DB: fk_maker : maping fk_maker
  @column({ columnName: 'fk_maker' })
  declare fkMaker: number

  @belongsTo(() => Maker, { foreignKey: 'fkMaker' })
  declare maker: BelongsTo<typeof Maker>

  // FK en DB: fk_category
  @column({ columnName: 'fk_category' })
  declare fkCategory: number

  @belongsTo(() => Category, { foreignKey: 'fkCategory' })
  declare category: BelongsTo<typeof Category>

  // Rélation: un product peut avoir plusieurs articles
  @hasMany(() => Article, { foreignKey: 'fkProduct' })
  declare article: HasMany<typeof Article>
}
