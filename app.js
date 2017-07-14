// call required modules
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

// Middleware to use for all request

// Set up the express app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, './template'));
app.set('view engine', 'ejs');

// Log requests to the console.
app.use(logger('dev'));


// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './client')));

// Require routes into the application
require('./server/routes')(app);

module.exports = app;
