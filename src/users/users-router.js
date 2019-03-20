'use strict';

const express = require('express');
const path = require('path');
const UsersService = require('./users-service');

const usersRouter = express.Router();
const jsonBodyParser = express.json();

usersRouter
  .post('/users', jsonBodyParser, (req, res, next) => {
    console.log('posting!');
    const { password, user_name, favorite_city } = req.body;  
    const fields = ['user_name', 'password', 'favorite_city'];

    for (const field of fields){
      if (!req.body[field])
        return res.status(400).json({
          error: `Missing '${field}' in request body`
        });
    }

    const passwordError = UsersService.validatePassword(password);

    if(passwordError){
      return res.status(400).json({ error: passwordError });
    }

    UsersService.hasUserWithUsername(req.app.get('db'), user_name)
      .then(hasUsername => {
        // console.log(hasUsername)
        if(hasUsername){
          return res.status(400).json({ error: 'Username already taken' });
        }
        return UsersService.hashPassword(password)
          .then(hashedPassword => {
            const newUser = {
              user_name,
              password: hashedPassword,
              favorite_city: favorite_city,
              date_created: 'now()',
            };
            return UsersService.insertUser(req.app.get('db'), newUser)
              .then(user => {
                res.status(201)
                  .location(path.posix.join(req.originalUrl, `/${user.id}`))
                  .json(UsersService.serializeUser(user));
              });
          });
      })
      .catch(next);
  });

module.exports = usersRouter;