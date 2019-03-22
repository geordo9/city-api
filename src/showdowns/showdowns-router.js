'use strict';

const express = require('express');
const path = require('path');
const ShowdownService = require('./showdowns-service');
const ShowdownRouter = express.Router();
const jsonBodyParser = express.json();

ShowdownRouter
  .post('/users', jsonBodyParser, (req, res, next) => {
    const { total_wins, total_losses, user_baseball_team, opp_baseball_team, wins_baseball, losses_baseball } = req.body;  
    const fields = ['total_wins', 'total_losses', 'user_baseball_team', 'opp_baseball_team', 'wins_baseball', 'losses_baseball'];

    for (const field of fields){
      if (!req.body[field])
        return res.status(400).json({
          error: `Missing '${field}' in request body`
        });
    }

    const newShowdown = {
      user_total_wins: total_wins,
      user_total_loses: total_losses,
      user_baseball_team,
      opp_baseball_team,
      wins_baseball,
      losses_baseball,
      date_created: 'now()',
    };
    ShowdownService.insertUser(req.app.get('db'), newShowdown)
      .then(showdown => {
        res.status(201)
          .location(path.posix.join(req.originalUrl, `/${showdown.id}`))
          .json(showdown);
      })
          
      .catch(next);
  });

ShowdownRouter
  .route('/showdowns')
  .get((req, res, next) => {
    ShowdownService.getAllShowdowns(req.app.get('db'))
      .then(resjson => res.json(resjson))
      .catch(next);
  });
ShowdownRouter
  .route('/showdowns/:showdown_id')
  .get((req, res, next) => {
    const { showdown_id } = req.params;
    ShowdownService.getUserById(req.app.get('db'), showdown_id)
      .then(showdown => {
        if(!showdown) {
          return res.status(404).json({
            error: { message : 'Showdown not found'}
          });
        }
        res.status(200).json(showdown);
        console.log(showdown);
        next();
      })
      .catch(next);
  });



module.exports = ShowdownRouter;