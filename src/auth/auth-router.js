'use strict'; 

const express = require('express');
const AuthService = require('./auth-service');
const { requireAuth } = require('../middleware/jwt-auth');

const authRouter = express.Router();
const bodyParser = express.json();

authRouter.post('auth/login',bodyParser, (req, res, next) => {
  console.log('logging in!');
  const { user_name, password } = req.body;
  const loginUser = { user_name, password };

  for(const [key, value] of Object.entries(loginUser)){
    if(value === null){
      return res.status(400).json({
        error: `Missing ${key} in request body`
      });
    }
  }

  AuthService
    .getUserWithUsername(req.app.get('db'), loginUser.user_name)
    .then(dbUser => {
      console.log('finding user!');
      if(!dbUser){
        return res.status(400).json({
          error: 'Incorrect user_name or password'
        });
      }
      return AuthService.comparePasswords(loginUser.password, dbUser.password)
        .then(compareMatch => {
          if (!compareMatch){
            return res.status(400).json({
              error: 'Incorrect user_name or password'
            });
          }
          const sub = dbUser.user_name;
          const payload = { user_id: dbUser.id };
          res.send({
            authToken: AuthService.createJwt(sub, payload)
          });
        });
    })
    .catch(next);

});

authRouter.post('auth/refresh', requireAuth, (req, res, next) => {
  const sub = req.user.user_name;
  const payload = { user_id: req.user.id };
  res.send({
    authToken: AuthService.createJwt(sub, payload),
  });
  next();
});

module.exports = authRouter;