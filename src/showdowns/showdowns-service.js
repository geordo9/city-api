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
  deleteShowdown(knex, id) {
    return knex
      .from('showdowns')
      .where({id})
      .delete();
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
  },
  getBaseballWins(db, id, oppTeamId) {
    switch(oppTeamId) {
    case 1:
      return db
        .select('wins_atl')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 2:
      return db
        .select('wins_mia')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 3:
      return db
        .select('wins_nym')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 4:
      return db
        .select('wins_wsh')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 5:
      return db
        .select('wins_phi')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 6:
      return db
        .select('wins_chc')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 7:
      return db
        .select('wins_cin')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 8:
      return db
        .select('wins_pit')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 9:
      return db
        .select('wins_stl')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 10:
      return db
        .select('wins_mil')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 11:
      return db
        .select('wins_ari')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 12:
      return db
        .select('wins_lad')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 13:
      return db
        .select('wins_col')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 14:
      return db
        .select('wins_sf')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 15:
      return db
        .select('wins_sd')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 16:
      return db
        .select('wins_bos')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 17:
      return db
        .select('wins_bal')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 18:
      return db
        .select('wins_nyy')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 19:
      return db
        .select('wins_tb')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 20:
      return db
        .select('wins_tor')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 21:
      return db
        .select('wins_cws')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 22:
      return db
        .select('wins_kc')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 23:
      return db
        .select('wins_det')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 24:
      return db
        .select('wins_min')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 25:
      return db
        .select('wins_cle')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 26:
      return db
        .select('wins_laa')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 27:
      return db
        .select('wins_hou')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 28:
      return db
        .select('wins_oak')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 29:
      return db
        .select('wins_sea')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 30:
      return db
        .select('wins_tex')
        .from('baseball_playoffs')
        .where({id})
        .first();
    default:
      return 0;
    }

  },
  getWinsInt(winsjson, oppTeamId) {
    switch(oppTeamId) {
    case 1:
      return winsjson.wins_alt;
    case 2:
      return winsjson.wins_mia;
    case 3:
      return winsjson.wins_nym;
    case 4:
      return winsjson.wins_wsh;
    case 5:
      return winsjson.wins_phi;
    case 6:
      return winsjson.wins_chc;
    case 7:
      return winsjson.wins_cin;
    case 8:
      return winsjson.wins_pit;
    case 9:
      return winsjson.wins_stl;
    case 10:
      return winsjson.wins_mil;
    case 11:
      return winsjson.wins_ari;
    case 12:
      return winsjson.wins_lad;
    case 13:
      return winsjson.wins_col;
    case 14:
      return winsjson.wins_sf;
    case 15:
      return winsjson.wins_sd;
    case 16:
      return winsjson.wins_bos;
    case 17:
      return winsjson.wins_bal;
    case 18:
      return winsjson.wins_nyy;
    case 19:
      return winsjson.wins_tb;
    case 20:
      return winsjson.wins_tor;
    case 21:
      return winsjson.wins_cws;
    case 22:
      return winsjson.wins_kc;
    case 23:
      return winsjson.wins_det;
    case 24:
      return winsjson.wins_min;
    case 25:
      return winsjson.wins_cle;
    case 26:
      return winsjson.wins_laa;
    case 27:
      return winsjson.wins_hou;
    case 28:
      return winsjson.wins_oak;
    case 29:
      return winsjson.wins_sea;
    case 30:
      return winsjson.wins_tex;
    default:
      return 0;
    }

  },
  getLossInt(lossjson, oppTeamId) {
    switch(oppTeamId) {
    case 1:
      return lossjson.losses_alt;
    case 2:
      return lossjson.losses_mia;
    case 3:
      return lossjson.losses_nym;
    case 4:
      return lossjson.losses_wsh;
    case 5:
      return lossjson.losses_phi;
    case 6:
      return lossjson.losses_chc;
    case 7:
      return lossjson.losses_cin;
    case 8:
      return lossjson.losses_pit;
    case 9:
      return lossjson.losses_stl;
    case 10:
      return lossjson.losses_mil;
    case 11:
      return lossjson.losses_ari;
    case 12:
      return lossjson.losses_lad;
    case 13:
      return lossjson.losses_col;
    case 14:
      return lossjson.losses_sf;
    case 15:
      return lossjson.losses_sd;
    case 16:
      return lossjson.losses_bos;
    case 17:
      return lossjson.losses_bal;
    case 18:
      return lossjson.losses_nyy;
    case 19:
      return lossjson.losses_tb;
    case 20:
      return lossjson.losses_tor;
    case 21:
      return lossjson.losses_cws;
    case 22:
      return lossjson.losses_kc;
    case 23:
      return lossjson.losses_det;
    case 24:
      return lossjson.losses_min;
    case 25:
      return lossjson.losses_cle;
    case 26:
      return lossjson.losses_laa;
    case 27:
      return lossjson.losses_hou;
    case 28:
      return lossjson.losses_oak;
    case 29:
      return lossjson.losses_sea;
    case 30:
      return lossjson.losses_tex;
    default:
      return 0;
    }

  },
  getBaseballLosses(db, id, oppTeamId) {
    switch(oppTeamId) {
    case 1:
      return db
        .select('losses_atl')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 2:
      return db
        .select('losses_mia')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 3:
      return db
        .select('losses_nym')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 4:
      return db
        .select('losses_wsh')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 5:
      return db
        .select('losses_phi')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 6:
      return db
        .select('losses_chc')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 7:
      return db
        .select('losses_cin')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 8:
      return db
        .select('losses_pit')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 9:
      return db
        .select('losses_stl')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 10:
      return db
        .select('losses_mil')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 11:
      return db
        .select('losses_ari')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 12:
      return db
        .select('losses_lad')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 13:
      return db
        .select('losses_col')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 14:
      return db
        .select('losses_sf')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 15:
      return db
        .select('losses_sd')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 16:
      return db
        .select('losses_bos')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 17:
      return db
        .select('losses_bal')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 18:
      return db
        .select('losses_nyy')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 19:
      return db
        .select('losses_tb')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 20:
      return db
        .select('losses_tor')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 21:
      return db
        .select('losses_cws')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 22:
      return db
        .select('losses_kc')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 23:
      return db
        .select('losses_det')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 24:
      return db
        .select('losses_min')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 25:
      return db
        .select('losses_cle')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 26:
      return db
        .select('losses_laa')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 27:
      return db
        .select('losses_hou')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 28:
      return db
        .select('losses_oak')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 29:
      return db
        .select('losses_sea')
        .from('baseball_playoffs')
        .where({id})
        .first();
    case 30:
      return db
        .select('losses_tex')
        .from('baseball_playoffs')
        .where({id})
        .first();
    default:
      return 0;
    }

  }
};

module.exports = ShowdownServices;