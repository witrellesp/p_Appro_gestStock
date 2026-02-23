import { DateTime } from 'luxon'
import { BaseModel, column,hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Product from '#models/product'

export default class Maker extends BaseModel {
  static table = 't_makers'
  @column({ isPrimary: true, columnName: 'id_make'})
  declare id: number

  @column({ columnName:'make_name'})
  declare name: string

  @column({ columnName:'make_picture'})
  declare picture: string

  // Rélation: un maker peut avoir plusieurs products 
  @hasMany(() => Product, { foreignKey: 'fkMaker' })
  declare products: HasMany<typeof Product>
  
}