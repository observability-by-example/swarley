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
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async index({request, response, view}) {
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
