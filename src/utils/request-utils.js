const request = require('request-promise')

const createRequest = async (apiConfig) => {
  console.log(apiConfig)
  return await request(apiConfig)
}

module.exports = createRequest
