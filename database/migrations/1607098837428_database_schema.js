'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Database = use('Database')
const Hash = use('Hash')

class ContactDataSchema extends Schema {
  up () {
    this.createTable('users', (table) => {
      table.increments()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
    this.createTable('contacts', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('image_url').nullable()
      table.timestamps()
    })
    this.createTable('contact_data', (table) => {
      table.increments()
      table.integer('category').notNullable()
      table.string('value').notNullable()
      table.string('label')
      table.integer('contact_id').unsigned().references('id').inTable('contacts')
      table.timestamps()
    })
    this.createTable('tokens', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('token', 255).notNullable().unique().index()
      table.string('type', 80).notNullable()
      table.boolean('is_revoked').defaultTo(false)
      table.timestamps()
    })
    this.schedule(async (trx) => {
      await Database.table('users').transacting(trx).insert({
        email: 'ned@flanders.com',
        password: await Hash.make('admin'),
        created_at: Date.now(),
        updated_at: Date.now(),
      })
    })
  }

  down () {
    this.drop('tokens')
    this.drop('contact_data')
    this.drop('contacts')
    this.drop('users')
  }
}

module.exports = ContactDataSchema
