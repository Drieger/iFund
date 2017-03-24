var path    = require('path'),
    express = require('express'),
    Router  = express.Router();


module.exports = function(config) {

  // Any non matched route should be handled here
  Router.get('*', (req, res) => {
    res.sendFile(path.join(config.SERVER_PUBLIC_FOLDER, 'dist', 'index.html'))
  })

  return Router
}
