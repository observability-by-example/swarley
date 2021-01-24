'use strict'

const axios = use('axios')
const logger = use('Logger')
const context = use('Context')

class Avatar {
    async byUsername (username) {
        return axios.get(`http://avatar-service:4000/avatar?name=${username}`, {
                headers: {
                    "Request-id": context.get('requestId')
                }
            })
            .then(response => {
                logger.info(`Some response here baby!!: ${response.data.url}`)
                return response.data
            })
    }
}

module.exports = Avatar