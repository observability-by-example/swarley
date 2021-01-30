'use strict'

const TraceParent = require('traceparent');
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
        const traceParentHeader = request.header('traceparent')
        const traceId = traceParentHeader
            ? TraceParent.fromString(traceParentHeader).traceId
            : require('crypto').randomBytes(16).toString('hex')
        this.context.traceId = traceId
        await next()
    }
}

module.exports = SetTraceId