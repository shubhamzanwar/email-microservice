var express = require('express');
var router = express.Router();
var api = require('../middleware/api-framework');
/* GET users listing. */
router.get('/', async function(req, res, next) {
  var apires = await api({
    url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
    method: 'GET'
  });
  console.log(apires);
  res.send('respond with a resource');
});

module.exports = router;
