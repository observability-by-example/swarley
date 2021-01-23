'use strict'

const Axios = use('axios')
const Logger = use('Logger')
const context = use('Context')

class Avatar {
    async byUsername (username) {
        return Axios.get(`http://avatar-service:4000/avatar?name=${username}`, {
                headers: {
                    "Request-id": context.get('requestId')
                }
            })
            .then(response => {
                Logger.info(`Some response here baby!!: ${response.data.url}`)
                return response.data
            })
    }
}

module.exports = Avatar