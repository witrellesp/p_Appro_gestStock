/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import KindsController from '#controllers/kinds_controller'
import GestionsController from '#controllers/gestions_controller'
//const KindsController = () => import('#controllers/kinds_controller')

import db from '@adonisjs/lucid/services/db'


// TEST DB CONECTION
router.get('/db-test', async () => {
  const result = await db.rawQuery('SHOW TABLES')
  return result[0] // o return result
})

// test
router.get('/test-edge', async ({ view }) => view.render('test'))


//router.on('/').render('pages/home')
router.get('/', async ({ view }) => {return view.render('pages/home',{
  state: {
      title: 'Home',
      isAuthenticated: false,
      isAdministrator: true,
  }
})})

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
router.delete('/kind/:id/delete_kind',[GestionsController, 'destroy'])

