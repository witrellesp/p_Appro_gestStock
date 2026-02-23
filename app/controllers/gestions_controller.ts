import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import Kind from '#models/kind'
import Category from '#models/category'
import Maker from '#models/maker'
import Product from '#models/product'
import Room from '#models/room'
import Chest from '#models/chest'
import User from '#models/user'

export default class GestionsController {
  async index({ view }: HttpContext) {
    const kinds = await Kind.query().orderBy('name', 'asc')
    const categories = await Category.query().orderBy('name', 'asc')
    const makers = await Maker.query().orderBy('name', 'asc')
    const rooms = await Room.query().orderBy('name', 'asc')
    const chests = await Chest.query().orderBy('name', 'asc')
    const users = await User.query().orderBy('name', 'asc')

    return view.render('gestion/gest_tables', {
      kinds,
      categories,
      makers,
      rooms,
      chests,
      users,
      nbKinds: kinds.length,
      nbCats: categories.length,
      nbMakers: makers.length,
      nbRooms: rooms.length,
      nbChests: chests.length,
      nbUsers: users.length,
    })
  }

  /************************ GENRES (KINDS) *************************/

  /**
   * Affiche une liste de GENRES
   */
  async kind_view({ view }: HttpContext) {
    const kinds = await Kind.query().orderBy('kind_name', 'asc')

    return view.render('gestion/kinds/kinds_view', {
      kinds,
    })
  }
  /**
   * Affiche un form pour créer un enregistrement d'un GENRE
   */
  async kind_add({ view }: HttpContext) {
    return view.render('gestion/kinds/kind_create', {})
  }

  /**
   * Handle le form pour submit la création d'un GENRE
   */
  async submit_add_Kind({ request, response }: HttpContext) {
    const kindName = (request.input('kind_name') || '').trim()
    if (!kindName) {
      return response.badRequest('kind_name est requis')
    }
    await Kind.create({ name: kindName })

    return response.redirect().toPath('/gest_tables')
  }

  /**
   * Edit individual d'un enregistrement GENRE
   */
  async kind_edit({ params, view }: HttpContext) {
    const kind = await Kind.find(params.id)

    if (!kind) {
      return view.render('pages/errors/not_found')
    }

    return view.render('gestion/kinds/kind_edit', {
      kind,
    })
  }

  /**
   * Handle qui submit l'édition d'un genre
   */
  async submit_edit_Kind({ params, request, response }: HttpContext) {
    const data = request.only(['kind_name'])

    const kind = await Kind.findOrFail(params.id)
    if (!kind) {
      return response.badRequest('Invalid ID')
    }

    kind.merge({ name: data.kind_name })
    await kind.save()

    return response.redirect().toPath('/gest_tables')
  }

  /**
   * Delete un enregistrement GENRE
   */
  async destroy_kind({ params, response, session }: HttpContext) {
    const id = params.id
    const kind = await Kind.find(id)
    const hasCategories = await kind?.related('categories').query().first()

    if (hasCategories) {
      // si le genre a des categories
      session.flash('errorKind', 'Impossible de supprimer: des catégories utilisent ce genre.')
      return response.redirect().toPath('/gest_tables')
    }
    if (!id) {
      return response.badRequest('Invalid ID')
    }

    await kind?.delete()

    session.flash('successKind', `Genre "${kind?.name}" supprimé.`)
    return response.redirect().toPath('/gest_tables')
  }

  /************************ CATEGORIES *************************/
  /**
   * Affiche une liste de CATEGORIES
   */
  async category_view({ view }: HttpContext) {
    const categories = await Category.query().orderBy('name', 'asc')

    ////console.log(categories)
    return view.render('gestion/categories/categories_view', {
      categories,
    })
  }

  /**
   * Affiche un form pour créer un enregistrement d'un CATEGORIE
   */
  async category_add({ view }: HttpContext) {
    const kinds = await Kind.query().orderBy('name', 'asc')

    return view.render('gestion/categories/category_create', {
      kinds,
    })
  }

  /**
   * Handle le form pour submit la création d'un CATEGORIE
   */
  async submit_add_category({ request, response }: HttpContext) {
    const kindId = request.input('fk_kind')

    //console.log(kindId)
    //console.log(request)
    const catName = (request.input('cate_name') || '').trim()
    if (!catName) {
      return response.badRequest('cate_name est requis')
    }
    if (!kindId) return response.badRequest('Kind is required')

    await Category.create({ name: catName, fkKind: kindId })

    return response.redirect().toPath('/gest_tables')
  }

  /**
   * Edit individual d'un enregistrement CATEGORIE
   */
  async category_edit({ params, view }: HttpContext) {
    const cate = await Category.find(params.id)


    return view.render('gestion/categories/category_edit', {
      cate,
    })
  }

  /**
   * Handle qui submit l'édition d'un CATEGORIE
   */
  async submit_edit_category({ params, request, response }: HttpContext) {
    const data = request.only(['cate_name'])

    const cate = await Category.findOrFail(params.id)
    if (!cate) {
      return response.badRequest('Invalid ID')
    }

    cate.merge({ name: data.cate_name })
    await cate.save()

    return response.redirect().toPath('/gest_tables')
  }

  /**
   * Delete un enregistrement CATEGORIE
   */
  async destroy_category({ params, response, session }: HttpContext) {
    const id = params.id
    const cat = await Category.find(id)

    const hasProducts = await Product.query().where('fkCategory', id).first()

    if (!id) {
      return response.badRequest('Invalid ID')
    }

    //console.log('products', hasProducts)
    if (hasProducts) {
      session.flash('errorCate', 'Impossible de suprimmer: des produits utilisent cette catégorie')
      return response.redirect().toPath('/gest_tables')
    }

    await cat?.delete()

    session.flash('successCate', `Catégorie "${cat?.name}" supprimé.`)
    return response.redirect().toPath('/gest_tables')
  }

  /************************ MAKERS *************************/
  /**
   * Affiche une liste de MAKERS
   */
  async maker_view({ view }: HttpContext) {
    const makers = await Maker.query().orderBy('name', 'asc')

    //console.log(makers)
    return view.render('gestion/makers/makers_view', {
      makers,
    })
  }

  /**
   * Affiche un form pour créer un enregistrement d'un MAKER
   */
  async maker_add({ view }: HttpContext) {
    return view.render('gestion/makers/maker_create', {})
  }

  /**
   * Handle le form pour submit la création d'un MAKER
   */
  async submit_add_maker({ request, response }: HttpContext) {
    const makeName = (request.input('make_name') || '').trim()
    if (!makeName) {
      return response.badRequest('make_name est requis')
    }
    await Maker.create({ name: makeName })

    return response.redirect().toPath('/gest_tables')
  }

  /**
   * Edit individual d'un enregistrement MAKER
   */
  async maker_edit({ params, view }: HttpContext) {
    const make = await Maker.find(params.id)


    return view.render('gestion/makers/maker_edit', {
      make,
    })
  }

  /**
   * Handle qui submit l'édition d'un MAKER
   */
  async submit_edit_maker({ params, request, response }: HttpContext) {
    const data = request.only(['make_name'])

    const make = await Maker.findOrFail(params.id)

    if (!make) {
      return response.badRequest('Invalid ID')
    }

    make.merge({ name: data.make_name })
    await make.save()

    return response.redirect().toPath('/gest_tables')
  }

  /**
   * Delete un enregistrement MAKER
   */
  async destroy_maker({ params, response, session }: HttpContext) {
    const id = params.id
    const make = await Maker.find(id)

    const hasProducts = await Product.query().where('fkMaker', id).first()

    if (!id) {
      return response.badRequest('Invalid ID')
    }

    //console.log('products', hasProducts)
    if (hasProducts) {
      session.flash('errorMake', 'Impossible de suprimmer: des produits utilisent cette marque')
      return response.redirect().toPath('/gest_tables')
    }

    await make?.delete()

    session.flash('successMake', `Marque "${make?.name}" supprimé.`)
    return response.redirect().toPath('/gest_tables')
  }

  /************************ ROOMS *************************/
  /**
   * Affiche une liste de ROOMS
   */
  async room_view({ view }: HttpContext) {
    const rooms = await Room.query().orderBy('name', 'asc')

    //console.log(rooms)
    return view.render('gestion/rooms/rooms_view', {
      rooms,
    })
  }

  /**
   * Affiche un form pour créer un enregistrement d'un ROOM
   */
  async room_add({ view }: HttpContext) {
    return view.render('gestion/rooms/room_create', {})
  }

  /**
   * Handle le form pour submit la création d'un ROOM
   */
  async submit_add_room({ request, response }: HttpContext) {
    const roomName = (request.input('room_name') || '').trim()
    if (!roomName) {
      return response.badRequest('room_name est requis')
    }
    await Room.create({ name: roomName })

    return response.redirect().toPath('/gest_tables')
  }

  /**
   * Edit individual d'un enregistrement ROOM
   */
  async room_edit({ params, view }: HttpContext) {
    const room = await Room.find(params.id)

    if (!room) {
      return view.render('pages/errors/not_found')
    }

    return view.render('gestion/rooms/room_edit', {
      room,
    })
  }

  /**
   * Handle qui submit l'édition d'un ROOM
   */
  async submit_edit_room({ params, request, response }: HttpContext) {
    const data = request.only(['room_name'])

    const room = await Room.findOrFail(params.id)
    if (!room) {
      return response.badRequest('Invalid ID')
    }

    room.merge({ name: data.room_name })
    await room.save()

    return response.redirect().toPath('/gest_tables')
  }

  /**
   * Delete un enregistrement ROOM
   */
  async destroy_room({ params, response, session }: HttpContext) {
    const id = params.id
    const room = await Room.find(id)

    const hasChests = await Chest.query().where('fkRoom', id).first()

    if (!id) {
      return response.badRequest('Invalid ID')
    }

    //console.log('chests', hasChests)
    if (hasChests) {
      session.flash('errorRoom', 'Impossible de suprimmer: des armoires utilisent cette salle')
      return response.redirect().toPath('/gest_tables')
    }

    await room?.delete()

    session.flash('successRoom', `Salle "${room?.name}" supprimé.`)
    return response.redirect().toPath('/gest_tables')
  }

  /************************ CHESTS (ARMOIRES) *************************/
  /**
   * Affiche une liste de CHESTS
   */
  async chest_view({ view }: HttpContext) {
    const chests = await Chest.query().orderBy('name', 'asc')

    //console.log(chests)
    return view.render('gestion/chests/chests_view', {
      chests,
    })
  }

  /**
   * Affiche un form pour créer un enregistrement d'un CHEST
   */
  async chest_add({ view }: HttpContext) {
    const rooms = await Room.query().orderBy('name', 'asc')

    return view.render('gestion/chests/chest_create', {
      rooms,
    })
  }

  /**
   * Handle le form pour submit la création d'un CHEST
   */
  async submit_add_chest({ request, response }: HttpContext) {
    const roomId = request.input('fk_room')

    //console.log(roomId)
    //console.log(request)
    const chestName = (request.input('ches_name') || '').trim()

    if (!chestName) {
      return response.badRequest('ches_name est requis')
    }
    if (!roomId) return response.badRequest('Kind is required')

    await Chest.create({ name: chestName, fkRoom: roomId })

    return response.redirect().toPath('/gest_tables')
  }

  /**
   * Edit individual d'un enregistrement CHEST
   */
  async chest_edit({ params, view }: HttpContext) {
    const ches = await Chest.find(params.id)


    return view.render('gestion/chests/chest_edit', {
      ches,
    })
  }

  /**
   * Handle qui submit l'édition d'un CHEST
   */
  async submit_edit_chest({ params, request, response }: HttpContext) {
    const data = request.only(['ches_name'])

    const ches = await Chest.findOrFail(params.id)

    if (!ches) {
      return response.badRequest('Invalid ID')
    }

    ches.merge({ name: data.ches_name })
    await ches.save()

    return response.redirect().toPath('/gest_tables')
  }

  /**
   * Delete un enregistrement CHEST
   */
  async destroy_chest({ params, response, session }: HttpContext) {
    const id = params.id
    const ches = await Chest.find(id)

    // TODO : A MODIFIER QUAND LE MODEL ARTICLES EST CREE
    const hasArticles = await db.from('t_articles').where('fk_chest', id).first()

    if (!id) {
      return response.badRequest('Invalid ID')
    }

    //console.log('hasArticles', hasArticles)
    if (hasArticles) {
      session.flash('errorChes', 'Impossible de suprimmer: des articles utilisent cette armoire')
      return response.redirect().toPath('/gest_tables')
    }

    await ches?.delete()

    session.flash('successChes', `Armoire "${ches?.name}" supprimé.`)
    return response.redirect().toPath('/gest_tables')
  }

  /************************ UTILISATEURS  *************************/
  /**
   * Affiche une liste de USERS
   */
  async user_view({ view }: HttpContext) {
    const users = await User.query().orderBy('name', 'asc')

    //console.log(users)
    return view.render('gestion/users/users_view', {
      users,
    })
  }

  /**
   * Affiche un form pour créer un enregistrement d'un USER
   */
  async user_add({ view }: HttpContext) {
    return view.render('gestion/users/user_create', {})
  }

  /**
   * Handle le form pour submit la création d'un USER
   */
  async submit_add_user({ request, response }: HttpContext) {
    const userId = (request.input('user_id') || '').trim()
    const userName = (request.input('user_name') || '').trim()
    const userFirstname = (request.input('user_firstname') || '').trim()
    const userGroup = request.input('user_group') ? 1 : 0

    //console.log('usergroup', userGroup)

    if (!userId) {
      return response.badRequest('user_id est requis')
    }
    if (!userName) {
      return response.badRequest('user_name est requis')
    }
    if (!userFirstname) {
      return response.badRequest('user_firstname est requis')
    }

    await User.create({ id: userId, name: userName, firstname: userFirstname, group: userGroup })

    return response.redirect().toPath('/gest_tables')
  }

  /**
   * Edit individual d'un enregistrement USER
   */
  async user_edit({ params, view }: HttpContext) {
    const user = await User.find(params.id)


    return view.render('gestion/users/user_edit', {
      user,
    })
  }

  /**
   * Handle qui submit l'édition d'un USER
   */
  async submit_edit_user({ params, request, response }: HttpContext) {
    const user = await User.findOrFail(params.id)

    const dataId = request.input('user_id')
    const dataName = request.input('user_name')
    const dataFirstname = request.input('user_firstname')
    const oldId = user.id

    try {
      const updatedRows = await User.query().where('id', oldId).update({
        id: dataId,
        name: dataName,
        firstname: dataFirstname,
      })

      if (!updatedRows) {
        return response.badRequest('User not found or not updated')
      }
    } catch (error) {
      console.error(error)
      return response.badRequest('Error updating user')
    }

    return response.redirect().toPath('/gest_tables')
  }

  /**
   * Delete un enregistrement USER
   */
  async destroy_user({ params, response, session }: HttpContext) {
    const id = params.id
    const user = await User.find(id)
    //console.log('params', params)

    // TODO : A MODIFIER QUAND LE MODEL BORROWS EST CREE
    const hasBorrows = await db.from('t_borrows').where('borr_returned_visa', id).first()

    if (!id) {
      return response.badRequest('Invalid ID')
    }

    //console.log('hasArticles', hasBorrows)
    if (hasBorrows) {
      session.flash(
        'errorUser',
        `Impossible de suprimmer: cet utilisateur "${user?.firstname} ${user?.name}" est lié à des emprunts.`
      )
      return response.redirect().toPath('/gest_tables')
    }

    await user?.delete()

    session.flash('successUser', `User "${user?.name}" supprimé.`)
    return response.redirect().toPath('/gest_tables')
  }
}
