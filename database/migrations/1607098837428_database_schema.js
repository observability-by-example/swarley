'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactDataSchema extends Schema {
  up () {
    this.createIfNotExists('users', (table) => {
      table.collate('utf8mb4_unicode_520_ci')
      table.increments().collate('utf8mb4_unicode_520_ci')
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
    this.createIfNotExists('contacts', (table) => {
      table.collate('utf8mb4_unicode_520_ci')
      table.increments()
      table.string('name').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('image_url').nullable()
      table.timestamps()
    })
    this.createIfNotExists('contact_data', (table) => {
      table.collate('utf8mb4_unicode_520_ci')
      table.increments()
      table.integer('category').notNullable()
      table.string('value').notNullable()
      table.string('label')
      table.integer('contact_id').unsigned().references('id').inTable('contacts')
      table.timestamps()
    })
    this.createIfNotExists('tokens', (table) => {
      table.collate('utf8mb4_unicode_520_ci')
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('token', 255).notNullable().unique().index()
      table.string('type', 80).notNullable()
      table.boolean('is_revoked').defaultTo(false)
      table.timestamps()
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
