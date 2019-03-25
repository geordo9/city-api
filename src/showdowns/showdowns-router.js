'use strict';

const express = require('express');
const path = require('path');
const ShowdownService = require('./showdowns-service');
const ShowdownRouter = express.Router();
const jsonBodyParser = express.json();
const { requireAuth } = require('../middleware/jwt-auth');

ShowdownRouter
  .route('/showdowns')
  .all(requireAuth)
  .post(jsonBodyParser, (req, res, next) => {
    const { user_baseball_team, opp_baseball_team } = req.body;  
    const fields = [ 'user_baseball_team', 'opp_baseball_team'];

    for (const field of fields){
      if (!req.body[field])
        return res.status(400).json({
          error: `Missing '${field}' in request body`
        });
    }

    ShowdownService.getBaseballWins(req.app.get('db'), user_baseball_team, opp_baseball_team)
      .then(wins => {
        ShowdownService.getBaseballLosses(req.app.get('db'), user_baseball_team, opp_baseball_team)
          .then(losses => {
            const wins_baseball = ShowdownService.getWinsInt(wins, opp_baseball_team);
            const losses_baseball = ShowdownService.getLossInt(losses, opp_baseball_team);
            const newShowdown = {
              user_total_wins: wins_baseball,
              user_total_loses: losses_baseball,
              user_baseball_team,
              opp_baseball_team,
              wins_baseball: wins_baseball,
              losses_baseball: losses_baseball,
              date_created: 'now()',
            };
            console.log(req.user);
            newShowdown.user_pin = 7;
            
            ShowdownService.insertShowdown(req.app.get('db'), newShowdown)
              .then(showdown => {
                res.status(201)
                  .location(path.posix.join(req.originalUrl, `/1/${showdown.id}`))
                  .json(showdown);
              });
          });
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
    ShowdownService.getShowdownById(req.app.get('db'), showdown_id)
      .then(showdown => {
        if(!showdown) {
          return res.status(404).json({
            error: { message : 'Showdown not found'}
          });
        }
        res.status(200).json(showdown);
        next();
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    ShowdownService.deleteShowdown(
      req.app.get('db'),
      req.params.showdown_id
    )
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  });
ShowdownRouter
  .route('/showdowns/user/:user_id')
  .get((req, res, next) => {
    const { user_id } = req.params;
    ShowdownService.getUserShowdowns(req.app.get('db'), user_id)
      .then(showdown => {
        if(!showdown) {
          return res.status(404).json({
            error: { message : 'Showdowns for this user not found'}
          });
        }
        res.status(200).json(showdown);
        next();
      })
      .catch(next);
  });



module.exports = ShowdownRouter;