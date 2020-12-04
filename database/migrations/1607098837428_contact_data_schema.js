'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactDataSchema extends Schema {
  up () {
    this.create('contact_data', (table) => {
      table.increments()
      table.integer('category').notNullable()
      table.string('value').notNullable()
      table.string('label')
      table.integer('contact_id').references('id').inTable('contacts')
      table.timestamps()
    })
  }

  down () {
    this.drop('contact_data')
  }
}

module.exports = ContactDataSchema
