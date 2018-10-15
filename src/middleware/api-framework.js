/*
 * This file exposes api function consumed by individual services whenver api calling need arises
 * Api function expect apiOptions
*/
const request = require('request-promise')

async function api (apiOptions) {
  try {
    return await request(apiOptions)
  } catch (err) {
    throw err
  }
}

module.exports = api
