'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const ContactDatum = use('App/Models/ContactDatum')

class Contact extends Model {
    emailAddresses () {
        return this.hasMany('App/Models/ContactDatum')
            .where({category: ContactDatum.CATEGORIES.EMAIL_ADDRESS})
    }

    mailingAddresses () {
        return this.hasMany('App/Models/ContactDatum')
            .where({category: ContactDatum.CATEGORIES.MAILING_ADDRESS})
    }

    phoneNumbers () {
        return this.hasMany('App/Models/ContactDatum')
            .where({category: ContactDatum.CATEGORIES.PHONE_NUMBER})
    }
}

module.exports = Contact
