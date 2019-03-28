/* eslint-disable no-undef */
'use strict';

const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('Showdown Endpoints', function() {
  let db;
  const testUsers = helpers.makeUsersArray();
  const testShowdowns = helpers.makeShowdownsArray(testUsers);


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

  describe('POST /showdowns', () => {
    beforeEach('insert things', () =>
      helpers.seedShowdownsTables(
        db,
        testUsers,
        testShowdowns
      )
    );

    it('creates a showdown, responding with 201 and the new showdown', function () {
      this.retries(3);
      const testUser = testUsers[0];
      const newShowdown = {
        user_pin: testUser.id,
        user_total_wins: 1,
        user_total_loses: 0,
        user_baseball_team: 5,
        opp_baseball_team: 10,
        wins_baseball: 1,
        losses_baseball: 0
      };

      return supertest(app)
        .post('/showdowns')
        .set('Authorization', helpers.makeAuthHeader(testUser, process.env.JWT_SECRET))
        .send(newShowdown)
        .expect(201)
        .expect(res => {
          expect(res.body).to.have.property('id');
          expect(res.body.user_pin).to.eql(testUser.id);
          expect(res.body.user_total_wins).to.eql(newShowdown.user_total_wins);
          expect(res.body.user_total_loses).to.eql(newShowdown.user_total_loses);
          expect(res.body.user_baseball_team).to.eql(newShowdown.user_baseball_team);
          expect(res.body.opp_baseball_team).to.eql(newShowdown.opp_baseball_team);
          expect(res.body.wins_baseball).to.eql(newShowdown.wins_baseball);
          expect(res.body.losses_baseball).to.eql(newShowdown.losses_baseball);
          expect(res.headers.location).to.eql(`/showdowns/${res.body.id}`);
          const expectedDate = new Date().toLocaleString('en', {
            timeZone: 'UTC'
          });
          const actualDate = new Date(res.body.date_created).toLocaleString();
          expect(actualDate).to.eql(expectedDate);
        })
        .expect(res =>
          db
            .from('showdowns')
            .select('*')
            .where({
              id: res.body.id
            })
            .first()
            .then(row => {
              expect(row.user_total_wins).to.eql(newShowdown.user_total_wins);
              expect(row.user_total_loses).to.eql(newShowdown.user_total_loses);
              expect(row.user_baseball_team).to.eql(newShowdown.user_baseball_team);
              expect(row.opp_baseball_team).to.eql(newShowdown.opp_baseball_team);
              expect(row.wins_baseball).to.eql(newShowdown.wins_baseball);
              expect(row.losses_baseball).to.eql(newShowdown.losses_baseball);
              expect(row.user_pin).to.eql(newShowdown.user_pin);
              const expectedDate = new Date().toLocaleString('en', {
                timeZone: 'UTC'
              });
              const actualDate = new Date(row.date_created).toLocaleString();
              expect(actualDate).to.eql(expectedDate);
            })
        );
    });

    const requiredFields = ['user_baseball_team', 'opp_baseball_team'];

    requiredFields.forEach(field => {
      const testUser = testUsers[0];
      const newShowdown = {
        user_pin: testUser.id,
        user_total_wins: 1,
        user_total_loses: 0,
        user_baseball_team: 5,
        opp_baseball_team: 10,
        wins_baseball: 1,
        losses_baseball: 0
      };

      it(`responds with 400 and an error message when the '${field}' is missing`, () => {
        delete newShowdown[field];

        return supertest(app)
          .post('/showdowns')
          .set('Authorization', helpers.makeAuthHeader(testUser, process.env.JWT_SECRET))
          .send(newShowdown)
          .expect(400, {
            error: `Missing '${field}' in request body`,
          });
      });
    });
  });
});