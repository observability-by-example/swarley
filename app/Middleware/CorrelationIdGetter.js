'use strict'
const { v4: uuidv4 } = use('uuid')

class CorrelationIdGetter {
    static get inject () {
      return ['Context']
    }
  
    constructor (context) {
      this.context = context
    }
  
    async handle ({ request }, next) {
      this.context.set('requestId', uuidv4())
      await next()
    }
}

module.exports = CorrelationIdGetter