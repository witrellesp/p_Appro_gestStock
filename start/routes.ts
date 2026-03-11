/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const GestionsController = () => import ('#controllers/gestions_controller')
const ConnectionsController = () => import ('#controllers/connections_controller')
const BorrowsController = () => import ('#controllers/borrows_controller')
const ProductsController = () => import ('#controllers/products_controller')
const MenusController = () => import ('#controllers/menus_controller')
const SearchController = () => import ('#controllers/search_controller')

import db from '@adonisjs/lucid/services/db'
import { AssertionError } from 'assert/strict'
import ArticlesController from '#controllers/articles_controller'


// TEST DB CONECTION
router.get('/db-test', async () => {
  const result = await db.rawQuery('SHOW TABLES')
  return result[0] // o return result
})

// test
router.get('/test-edge', async ({ view }) => view.render('test'))


//router.on('/').render('pages/home')
router.get('/',[SearchController,'index'])



//Login 
router.post('/login',[ConnectionsController,'login'])
router.get('/logout',[ConnectionsController,'logout'])



/* EMPRUNTS */
// Page principal des emprunts
router.get('/borrow', [BorrowsController, 'index'])

// Tous les emprunts
router.get('/borrow/view', [BorrowsController, 'view'])
// Mes emprunts
router.get('/borrow/myborrow',[BorrowsController,'myborrow'])

// Ajout d un emprunt
router.post('/borrow/:id/add',[BorrowsController,'add'])

// Retour d un emprunt
router.post('/borrow/:id/back',[BorrowsController,'back'])




/* Articles */
router.get('/articles/:id/get',[ArticlesController,'get'])
router.get('/articles/:id/qrcode',[ArticlesController,'getQrCodeData'])
router.get('/articles/:id/view',[ArticlesController,'view'])

// API endpoints used by management forms
router.get('/api/rooms', [GestionsController, 'getRooms'])
router.get('/api/rooms/:id/chests', [GestionsController, 'getRoomChests'])
router.get('/api/products', [GestionsController, 'apiProducts'])




/* Products */
// Liste des articles selon catégorie
router.get('/products',[ProductsController,'index'])

router.get('/menu',[MenusController,'index'])


// GROUP GEST - AUTH ET ADMIN REQUIS
router.group(() => {

/* GESTION */
router.get('/gest_tables',[GestionsController, 'index'])

/* KINDS */
// List de genres - ok
router.get('/kind/view', [GestionsController, 'kind_view'])

// Form pour créer un genre - ok
router.get('/kind/create', [GestionsController, 'kind_add'])
// Route qui submit la création du genre - ok
router.post('/kind/submit_add', [GestionsController, 'submit_add_Kind'])

// Form pour l'édition d'un genre
router.get('/kind/:id/edit',[GestionsController, 'kind_edit'])
// Route qui submit l'édition du genre
router.put('/kind/:id/submit_edit',[GestionsController, 'submit_edit_Kind'])

// Route pour delete un genre
router.delete('/kind/:id/delete_kind',[GestionsController, 'destroy_kind'])


/* CATEGORIES */
// Liste de categories§
router.get('/category/view',[GestionsController,'category_view'])

// Form pour la modification d'une categorie
router.get('/category/:id/edit', [GestionsController, 'category_edit'])
// Route qui submit la modification d'une catégorie
router.put('/category/:id/submit_edit',[GestionsController, 'submit_edit_category'])

// Route qui retourne un form pour la creation d'une categorie
router.get('/category/add',[GestionsController, 'category_add'])
// Route qui retourne un form pour la crreation d'une categorie
router.post('/category/submit_add',[GestionsController, 'submit_add_category'])

// Route pour delete une catégorie
router.delete('/category/:id/delete_category',[GestionsController, 'destroy_category'])


/* MAKERS (FABRICANTS - MARQUES)*/
// Liste de makers
router.get('/maker/view',[GestionsController,'maker_view'])

// Form pour la modification d'un maker
router.get('/maker/:id/edit', [GestionsController, 'maker_edit'])
// Route qui submit la modification d'un maker
router.put('/maker/:id/submit_edit',[GestionsController, 'submit_edit_maker'])

// Route qui retourne un form pour la creation d'un maker
router.get('/maker/add',[GestionsController, 'maker_add'])
// Route qui retourne un form pour la crreation d'un maker
router.post('/maker/submit_add',[GestionsController, 'submit_add_maker'])

// Route pour delete un maker
router.delete('/maker/:id/delete_maker',[GestionsController, 'destroy_maker'])


/* ROOMS - SALLES*/
// Liste de ROOMS
router.get('/room/view',[GestionsController,'room_view'])

// Form pour la modification d'un ROOM
router.get('/room/:id/edit', [GestionsController, 'room_edit'])
// Route qui submit la modification d'un room
router.put('/room/:id/submit_edit',[GestionsController, 'submit_edit_room'])

// Route qui retourne un form pour la creation d'un room
router.get('/room/add',[GestionsController, 'room_add'])
// Route qui retourne un form pour la crreation d'un room
router.post('/room/submit_add',[GestionsController, 'submit_add_room'])

// Route pour delete un room
router.delete('/room/:id/delete_room',[GestionsController, 'destroy_room'])


/* CHESTS - ARMOIRES*/
// Liste de CHESTS
router.get('/chest/view',[GestionsController,'chest_view'])

// Form pour la modification d'un CHEST
router.get('/chest/:id/edit', [GestionsController, 'chest_edit'])
// Route qui submit la modification d'un CHEST
router.put('/chest/:id/submit_edit',[GestionsController, 'submit_edit_chest'])

// Route qui retourne un form pour la creation d'un chest
router.get('/chest/add',[GestionsController, 'chest_add'])
// Route qui retourne un form pour la crreation d'un room
router.post('/chest/submit_add',[GestionsController, 'submit_add_chest'])

// Route pour delete un room
router.delete('/chest/:id/delete_chest',[GestionsController, 'destroy_chest'])


/* UTILISATEURS */
// Liste de USERS
router.get('/user/view',[GestionsController,'user_view'])

// Form pour la modification d'un user
router.get('/user/:id/edit', [GestionsController, 'user_edit'])
// Route qui submit la modification d'un user
router.put('/user/:id/submit_edit',[GestionsController, 'submit_edit_user'])

// Route qui retourne un form pour la creation d'un user
router.get('/user/add',[GestionsController, 'user_add'])
// Route qui retourne un form pour la creation d'un room
router.post('/user/submit_add',[GestionsController, 'submit_add_user'])

// Route pour delete un room
router.delete('/user/:id/delete_user',[GestionsController, 'destroy_user'])


/* ARTICLES */
// Liste de articles
router.get('/article/view',[GestionsController,'article_view'])

// Form pour la modification d'un article
router.get('/article/:id/edit', [GestionsController, 'article_edit'])
// Route qui submit la modification d'un article
router.put('/article/:id/submit_edit',[GestionsController, 'submit_edit_article'])

// Route qui retourne un form pour la creation d'un article
router.get('/article/add',[GestionsController, 'article_add'])
// Route qui retourne un form pour la creation d'un article
router.post('/article/submit_add',[GestionsController, 'submit_add_article'])

// Route pour delete un article
router.delete('/article/:id/delete_article',[GestionsController, 'destroy_article'])


}).middleware([middleware.auth(),middleware.admin()])

/* SEARCH */
router.get('/search', [SearchController, 'index'])