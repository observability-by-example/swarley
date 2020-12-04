'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Contact extends Model {
    emailAddresses () {
        return this.hasMany('App/Models/ContactDatum')
            .where({category: ContactData.CATEGORIES.EMAIL_ADDRESS})
    }

    mailingAddresses () {
        return this.hasMany('App/Models/ContactDatum')
            .where({category: ContactData.CATEGORIES.MAILING_ADDRESS})
    }

    phoneNumbers () {
        return this.hasMany('App/Models/ContactDatum')
            .where({category: ContactData.CATEGORIES.PHONE_NUMBER})
    }
}

module.exports = Contact
