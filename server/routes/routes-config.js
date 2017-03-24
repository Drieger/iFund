var indexRouter = require('./index');
var apiRouter   = require('./api');


module.exports = function(app, config) {
  app.use('/api', require('./api')(config))
  app.use('/', require('./index')(config))
}
