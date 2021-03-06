'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {import('../../Services/ContactService')} */
const ContactService = use('App/Services/ContactService');
const contactService = new ContactService();

class ContactController {
    /**
     * Return all contacts belonging to a user.
     *
     * @queryParam {string} page
     * @queryParam {string} perPage
     * @queryParam {string} sort Sort results by a field and direction. Use + for ascending or - for decreasing. Example: (?sort=+name, ?sort=-created_at)
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async index({auth, request, response, view}) {
        const options = request.only(['page', 'perPage', 'sort']); // Filtering, sorting and pagination options
        return contactService.getAllContactsForUser(await auth.getUser(), options)
    }

    /**
     * Add a new contact for this user.
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({auth, request, response}) {
        const {
            name,
            phoneNumbers = [],
            emailAddresses = [],
            mailingAddresses = []
        } = request.all()
        const user = await auth.getUser();
        const contact = await contactService.create(
            user, name, phoneNumbers, emailAddresses, mailingAddresses
        )
        response.status(201).send({data: contact});
    }

    /**
     * View a single contact.
     * GET contacts/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async show({params, request, response}) {
    }

    /**
     * Update a contact's details.
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({params, request, response}) {
    }

    /**
     * Delete a contact.
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({params, request, response}) {
    }
}

module.exports = ContactController
