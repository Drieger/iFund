var path = require('path');

module.exports = {
  // SERVER
  SERVER_PORT: 3000,
  SERVER_PUBLIC_FOLDER: path.join(__dirname, 'public'),

  //CLIENT
  CLIENT_BUILD_SRC : path.join(__dirname, 'client-app', 'src'),
  CLIENT_BUILD_DST : path.join(__dirname, 'public', 'dist'),
  CLIENT_ASSETS_SRC: path.join(__dirname, 'client-app', 'bower_components'),
  CLIENT_ASSETS_DST: path.join(__dirname, 'client-app', 'src', 'assets'),

}
