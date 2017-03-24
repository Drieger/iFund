var express = require('express'),
    Router  = express.Router();

module.exports = function(config) {

  Router.get('/', (req, res) => {
    res.send('Hello API');
  });

  return Router
}

