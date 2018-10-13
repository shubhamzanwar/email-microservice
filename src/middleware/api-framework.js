/*
 * This file exposes api function consumed by individual services whenver api calling need arises
 * Api function expect apiOptions
*/
const request = require('../utils/request-utils')

async function api (apiOptions) {
  try {
    return await request(apiOptions)
  } catch (err) {
    console.log('Calling Api - Config', JSON.stringify(apiOptions))
    console.error('Error in API request', err)
    throw err
  }
}

module.exports = api
