var app = require('./server/server-app');
var config = require('./config');

app.listen(config.SERVER_PORT, (err, data) => {
  if(err) throw err;
  console.log("Server listening on port %s", config.SERVER_PORT);
});
