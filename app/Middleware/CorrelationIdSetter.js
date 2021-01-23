'use strict'
const { v4: uuidv4 } = use('uuid')

class CorrelationIdSetter {
    static get inject () {
      return ['Context']
    }
  
    constructor (context) {
      this.context = context
    }
  
    async handle ({ request }, next) {
      const requestId = request.header('x-correlation-id', undefined) || uuidv4()
      this.context.set('requestId', requestId)
      await next()
    }
}

module.exports = CorrelationIdSetter