/* eslint-disable no-undef */
'use strict';
const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('Users Endpoints', function() {
  let db;
  
  const testUsers = helpers.makeUsersArray();
  const testUser = testUsers[0];
  
 

  describe('POST /users', () => {
    before('make knex instance', () => {
      db = knex({
        client: 'pg',
        connection: process.env.TEST_DB_URL,
      });
      app.set('db', db);
    });
    
    after('disconnect from db', () => db.destroy());
    
    before('cleanup', () => helpers.cleanTables(db));
    
    afterEach('cleanup', () => helpers.cleanTables(db));
    context('User Validation', () => {
      beforeEach('insert users', () =>
        helpers.seedUsers(db,testUsers)
      );

      const requiredFields = ['user_name', 'password' ];

      requiredFields.forEach(field => {
        const registerAttemptBody = {
          user_name: 'test user_name',
          password: 'test password',
          favorite_city: 1,
        };

        it(`responds with 400 required error when '${field}' is missing`, () => {
          delete registerAttemptBody[field];

          return supertest(app)
            .post('/users')
            .send(registerAttemptBody)
            .expect(400, {
              error: `Missing '${field}' in request body`,
            });
        });
      });
      it('responds 400 \'Password be longer than 8 characters\' when empty password', () => {
        const userShortPassword = {
          user_name: 'test user_name',
          password: '1234567',
          favorite_city: 1,
        };
        return supertest(app)
          .post('/users')
          .send(userShortPassword)
          .expect(400, { error: 'Password be 8 characters or more' });
      });
      it('responds 400 \'Password be less than 72 characters\' when long password', () => {
        const userLongPassword = {
          user_name: 'test user_name',
          password: '*'.repeat(73),
          favorite_city: 1
        };
        return supertest(app)
          .post('/users')
          .send(userLongPassword)
          .expect(400, { error: 'Password be 72 characters or less' });
      });
      it('responds 400 error when password starts with spaces', () => {
        const userPasswordStartsSpaces = {
          user_name: 'test user_name',
          password: ' 1Aa!2Bb@',
          favorite_city: 1
        };
        return supertest(app)
          .post('/users')
          .send(userPasswordStartsSpaces)
          .expect(400, { error: 'Password must not start or end with empty spaces' });
      });
      it('responds 400 error when password ends with spaces', () => {
        const userPasswordEndsSpaces = {
          user_name: 'test user_name',
          password: '1Aa!2Bb@ ',
          favorite_city: 1
        };
        return supertest(app)
          .post('/users')
          .send(userPasswordEndsSpaces)
          .expect(400, { error: 'Password must not start or end with empty spaces' });
      });
      it('responds 400 error when password isn\'t complex enough', () => {
        const userPasswordNotComplex = {
          user_name: 'test user_name',
          password: '11AAaabb',
          favorite_city: 1
        };
        return supertest(app)
          .post('/users')
          .send(userPasswordNotComplex)
          .expect(400, { error: 'Password must contain 1 upper case, lower case, number and special character' });
      });
      it('responds 400 \'User name already taken\' when user_name isn\'t unique', () => {
        const duplicateUser = {
          user_name: testUser.user_name,
          password: '11AAaa!!',
          favorite_city: 1
        };
        return supertest(app)
          .post('/users')
          .send(duplicateUser)
          .expect(400, { error: 'Username already taken' });
      });
    });    
  });
});