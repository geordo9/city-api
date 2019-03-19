'use strict';

const CitiesService = {
  getAllCities(knex) {
    return knex.select('*').from('cities');
  },
  getCityById(knex) {
    return knex
      .from('cities')
      .select('*')
      .where({id})
      .first();
  },
  getAllBaseballTeams(knex) {
    return knex.select('*').from('baseball_teams');
  },
  getBaseballTeamById(knex, id) {
    return knex
      .from('baseball_teams')
      .select('*')
      .where({id})
      .first();
  },
  getAllPlayoffs(knex) {
    return knex.select('*').from('baseball_playoffs');
  },
  getPlayoffsById(knex, id) {
    return knex
      .from('baseball_playoffs')
      .select('*')
      .where({id})
      .first();
  },
};

module.exports = CitiesService;
