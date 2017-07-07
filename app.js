const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const login = require('./routes/login');
const register = require('./routes/register');
const dashboard = require('./routes/dashboard');
const postpage = require('./routes/postpage');

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


app.use('/login', login);

app.use('/register', register);
app.use('/dashboard', dashboard);
app.use('/postpage', postpage);
app.use('/api', register);
app.use('/api', login);
app.use('/api', dashboard);


module.exports = app;