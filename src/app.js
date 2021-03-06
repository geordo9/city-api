'use strict';
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const citiesRouter = require('./cities/cities-router');
const usersRouter = require('./users/users-router');
const showdownRouter = require('./showdowns/showdowns-router');
const authRouter = require('./auth/auth-router');
const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use(citiesRouter);
app.use(usersRouter);
app.use(showdownRouter);
app.use(authRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
