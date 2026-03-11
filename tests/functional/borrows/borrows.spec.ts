import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'
import Borrow from '#models/borrow'
import User from '#models/user'
import { DateTime } from 'luxon'

test.group('Borrows - endpoints', (group) => {

  // TODO :  a modifier quand db_stock_test est créée
  // L'idée c'est de faire une transaction pour pouvoir tester avec db_stock sans la polluer avec des données de tests
  group.each.setup(() => testUtils.db().withGlobalTransaction())

  test('POST /borrow/:id/add creates a borrow', async ({ client, assert }) => {


    await User.create({
      id: 'u-test',
      name: 'Test',
      firstname: 'User',
      group: 1,
      actif: 1,
    })

    const articleId = 1

    const res = await client
      .post(`/borrow/${articleId}/add`)
      .json({
        taken_visa: 'u-test',               // owner
        taken_forwho_visa: 'William',       // forwho
        hideBorrDtPicker: '2026-03-05',     // taken_date
        taken_reasen: 'Functional test',    // reason
        taken_place: 'ETML',                // location
      })

    res.assertStatus(200)
    res.assertBody({ msgErr: '' })

    const created = await Borrow.query()
      .where('fkArticle', articleId)
      .orderBy('id', 'desc')
      .first()

    assert.exists(created)
    assert.equal(created!.owner, 'u-test')
    assert.equal(created!.forwho, 'William')
    assert.isNull(created!.returned_date)


  })

  test('POST /borrow/:id/back marks a borrow as returned', async ({ client, assert }) => {
    await User.create({ id: 'u-test', name: 'Test', firstname: 'User', group: 1, actif: 1 })
    await User.create({ id: 'u-return', name: 'Return', firstname: 'User', group: 1, actif: 1 })

    const articleId = 1

    // Arrange: créer un borrow actif
    const borrow = await Borrow.create({
      fkArticle: articleId,
      owner: 'u-test',
      forwho: 'Someone',
      taken_date: DateTime.fromISO('2026-03-01'),
      reason: 'Functional test',
      location: 'ETML',
    })

    const res = await client
      .post(`/borrow/${borrow.id}/back`)
      .json({
        taken_visa: 'u-return',
        hideBorrDtPicker: '2026-03-05',
        taken_note: 'Returned OK',
      })

    res.assertStatus(200)
    res.assertBody({ msgErr: '' })

    await borrow.refresh()
    assert.equal(borrow.returned_visa, 'u-return')
    assert.isNotNull(borrow.returned_date)
  })

  test('GET /borrow/view lists all active borrows', async ({ client }) => {
    // Arrange: Create test data
    await User.create({
      id: 'u-test-list',
      name: 'Test',
      firstname: 'ListUser',
      group: 1,
      actif: 1,
    })

/*     const borrow = await Borrow.create({
      fkArticle: 1,
      owner: 'u-test-list',
      forwho: 'Test Borrower',
      taken_date: DateTime.fromISO('2026-03-01'),
      reason: 'List test',
      location: 'ETML',
    }) */

    // Act: requet get pour récupérer les borrows actifs
    const res = await client.get('/borrow/view')

    // Assert: Check response status et content
    res.assertStatus(200)

   /*  res.assertTextIncludes('Test Borrower')
    res.assertTextIncludes('List test')
    res.assertTextIncludes('ETML') */
  })






})