'use strict'

const Contact = use('App/Models/Contact');
const ContactDatum = use('App/Models/ContactDatum');

class ContactService {
    /**
     * Create a new contact.
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async create (user, name, phoneNumbers, emailAddresses, mailingAddresses) {
        const data = {name, user_id: user.id}
        const contact = await Contact.create(data)

        // Inserting them manually rather than using Adonis relations
        // so we run 1 statement rather than 3
        phoneNumbers = phoneNumbers.map(number => {
            number.category = ContactDatum.CATEGORIES.PHONE_NUMBER
            number.contact_id = contact.id
            return number;
        })
        emailAddresses = emailAddresses.map(email => {
            email.category = ContactDatum.CATEGORIES.EMAIL_ADDRESS
            email.contact_id = contact.id
            return email;
        })
        mailingAddresses = mailingAddresses.map(address => {
            address.category = ContactDatum.CATEGORIES.MAILING_ADDRESS
            address.contact_id = contact.id
            return address;
        })
        const contactData = [...phoneNumbers, ...emailAddresses, ...mailingAddresses]
        await ContactDatum.createMany(contactData)
        return Contact // TODO set these relations on the model so we don't have to call with() always
            .query()
            .where({user_id: user.id})
            .with('phoneNumbers')
            .with('emailAddresses')
            .with('mailingAddresses')
            .first();
    }
}

module.exports = ContactService
