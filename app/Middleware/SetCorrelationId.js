'use strict'
const uuid = require('uuid').v4;

class SetCorrelationId {
    static get inject() {
        return ['Adonis/Src/HttpContext']
    }

    constructor(context) {
        this.context = context
    }

    async handle({request}, next) {
        const requestId = request.header('x-correlation-id', undefined) || uuid()
        this.context.requestId = requestId
        await next()
    }
}

module.exports = SetCorrelationId