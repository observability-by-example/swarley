'use strict'

const axios = use('axios')
const logger = use('Logger')

class Avatar {
    async byUsername (username) {
        return axios.get(`http://localhost:4000/avatar?name=${username}`)
            .then(response => {
                logger.info(`Some response here baby!!: ${response.data.url}`)
                return response.data
            })
    }
}

module.exports = Avatar