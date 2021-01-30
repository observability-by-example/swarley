'use strict'

const apm = require('elastic-apm-node');

class SetTraceId {
    static get inject() {
        return ['Adonis/Src/HttpContext']
    }

    constructor(context) {
        this.context = context
    }

    async handle({request}, next) {
        // Get ID from the traceparent header if available
        const traceId = apm.currentTraceIds['trace.id']
        this.context.traceId = traceId
        await next()
    }
}

module.exports = SetTraceId