import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, belongsTo } from '@adonisjs/lucid/orm'
import Borrow from '#models/borrow'
import type { HasMany, BelongsTo } from '@adonisjs/lucid/types/relations'
import Product from '#models/product'
import Chest from '#models/chest'

export default class Article extends BaseModel {

  static table = 't_articles'
  @column({ isPrimary: true, columnName: 'id_arti' })
  declare id: number

  @column({ columnName: 'arti_label' })
  declare label: string

  @column({ columnName: 'arti_purchase_date' })
  declare purchase_date: DateTime

  @column({ columnName: 'arti_price' })
  declare price: string

  @column({ columnName: 'arti_note' })
  declare note: string

  // FK en DB: fk_product : maping fk_product
  @column({ columnName: 'fk_product' })
  declare fkProduct: number

  @belongsTo(() => Product, { foreignKey: 'fkProduct' })
  declare product: BelongsTo<typeof Product>

  // FK en DB: fk_chest : maping fk_chest
  @column({ columnName: 'fk_chest' })
  declare fkChest: number

  @belongsTo(() => Chest, { foreignKey: 'fkChest' })
  declare chest: BelongsTo<typeof Chest>

  // Rélation: un article peut avoir plusieurs emprunts
  @hasMany(() => Borrow, { foreignKey: 'fkArticle' })
  declare borrow: HasMany<typeof Borrow>

  async isBorrowed(){
    const active = await Borrow.query()
    .where('fkArticle',this.id)
    .whereNull('borr_returned_date')
    .first()
    return !!active
  }
  
}
