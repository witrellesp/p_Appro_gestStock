import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Kind from '#models/kind'
import Product from '#models/product'


export default class Category extends BaseModel {

  static table = 't_categories'
  @column({ isPrimary: true, columnName: 'id_cate' })
  declare id: number

  @column({ columnName: 'cate_name' })
  declare name: string

  // FK en DB: fk_kind
  @column({columnName: 'fk_kind'})
  declare fkKind: number

  @belongsTo(()=> Kind, {foreignKey: 'fkKind'})
  declare kind: BelongsTo<typeof Kind>
  


  // Rélation: une categorie peut avoir plusieurs products 
  @hasMany(() => Product, { foreignKey: 'fkCategory' })
  declare products: HasMany<typeof Product>
  
}
