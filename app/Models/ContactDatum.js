'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/**
 * The ContactDatum model represents some information being stored about a contact.
 * Contact data are differentiated by category (such as phone/email/mailing)
 * This allows us to extend to storing anything, such as birthdays, notes, etc
 * They may also have a label (if the user wishes), such as Home/Work/Mobile, but we won't enforce those.
 */
class ContactDatum extends Model {
    static CATEGORIES = {
        PHONE_NUMBER: 1,
        EMAIL_ADDRESS: 2,
        MAILING_ADDRESS: 3,
    }
}

module.exports = ContactDatum
