'use strict';

const express = require('express');
const path = require('path');
const UsersService = require('./users-service');

const usersRouter = express.Router();
const jsonBodyParser = express.json();

usersRouter
  .post('/users', jsonBodyParser, (req, res, next) => {
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

usersRouter
  .route('/users')
  .get((req, res, next) => {
    UsersService.getAllUsers(req.app.get('db'))
      .then(resjson => res.json(resjson))
      .catch(next);
  });
usersRouter
  .route('/users/:user_id')
  .get((req, res, next) => {
    const { user_id } = req.params;
    UsersService.getUserById(req.app.get('db'), user_id)
      .then(user => {
        if(!user) {
          return res.status(404).json({
            error: { message : 'User not found'}
          });
        }
        res.status(200).json(user);
        console.log(user);
        next();
      })
      .catch(next);
  })
  .patch(jsonBodyParser, (req, res, next) => {
    const { user_id } = req.params;
    const { favorite_city, favorite_baseball } = req.body;
    const editedUser = { 
      favorite_city, 
      favorite_baseball,
      date_modified: 'now()',
    };

    const fields = ['favorite_city', 'favorite_baseball'];
    for (const field of fields) {
      if (!req.body[field])
        return res.status(400).json({
          error: `Missing '${field}' in request body`
        });
    }

    UsersService.editUser(req.app.get('db'), user_id, editedUser)
      .then(user => {
        res.status(200).json(user);
      }).catch(next);
  });

module.exports = usersRouter;