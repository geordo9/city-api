'use strict';

const ShowdownServices = {
  getAllShowdowns(knex) {
    return knex.select('*').from('showdowns');
  },
  getShowdownById(knex, id) {
    return knex
      .select('*')
      .from('showdowns')
      .where({id})
      .first();
  },
  getTotalWinsById(knex, id) {
    return knex
      .select('id', 'user_total_wins')
      .where({id})
      .first();
  },
  getTotalLossesById(knex, id) {
    return knex
      .select('id', 'user_total_loses')
      .where({id})
      .first();
  },
  insertShowdown(db, newShowdown) {
    console.log('insert running');
    return db
      .insert(newShowdown)
      .into('showdowns')
      .returning('*')
      .then(([user]) => user);
  },
  getUserShowdowns(db, user_pin) {
    return db
      .select('*')
      .from('showdowns')
      .where({user_pin});
  }
};

module.exports = ShowdownServices;