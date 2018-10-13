const chai = require('chai')

const expect = chai.expect
const api = require('../api-framework')

describe('API framework', () => {
  it('Should be able to call weather api and return 200 res', async () => {
    const res = await api({
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
      method: 'GET'
    });
    expect(JSON.parse(res).query.count).to.equal(1)
  })
})
