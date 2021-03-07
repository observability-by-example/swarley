'use strict'

const axios = use('axios')
const logger = use('Logger')

class Avatar {
    async byUsername (username) {
        logger.info(`Fetching avatar for ${username}`)
        return axios.get(`http://localhost:4000/avatar?name=${username}`)
            .then(response => {
                return response.data
            })
    }
}

module.exports = Avatar