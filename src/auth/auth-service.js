'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config'); 
const bcrypt = require('bcryptjs');

const AuthService = {
  getUserWithUsername(db, user_name){
    return db('cities_users')
      .where({user_name})
      .first();
  },

  comparePasswords(password, hash){
    return bcrypt.compare(password, hash);
  },

  verifyJwt(token) {
    return jwt.verify(token, config.JWT_SECRET, {
      algorithms: ['HS256']
    }); 
  },

  parseBasicToken(token){
    return Buffer.from(token, 'base64').toString().split(':');
  },

  createJwt(subject, payload){
    return jwt.sign(payload, config.JWT_SECRET, {
      subject,
      expiresIn: config.JWT_EXPIRY,
      algorithm: 'HS256'
    });
  }
};

module.exports = AuthService;
