// Third party basic packages
var path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser');

// Configuration file
var config = require('../config');

// Basic app
var app = express();

// Configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Configure static files
app.use('/static', express.static(path.join(config.SERVER_PUBLIC_FOLDER, 'dist', 'assets')))
app.use('/', express.static(path.join(config.SERVER_PUBLIC_FOLDER, 'dist')))

// App configuration packages
require('./routes/routes-config')(app, config)

// Exports our basic app
module.exports = app;

