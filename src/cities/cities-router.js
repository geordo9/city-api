'use strict';

const express = require('express');
const CitiesService = require('./cities-service');
const citiesRouter = express.Router();

citiesRouter
  .route('/city')
  .get((req, res, next) => {
    CitiesService.getAllCities(req.app.get('db'))
      .then(resjson => res.json(resjson))
      .catch(next);
  });
citiesRouter
  .route('/city/:city_id')
  .get((req, res, next) => {
    const { city_id } = req.params;
    CitiesService.getCityById(req.app.get('db'), city_id)
      .then(city => {
        if(!city) {
          return res.status(404).json({
            error: { message : 'City not found'}
          });
        }
        res.status(200).json(city);
        next();
      })
      .catch(next);
  });
  
citiesRouter
  .route('/baseball')
  .get((req, res, next) => {
    CitiesService.getAllBaseballTeams(req.app.get('db'))
      .then(resjson => res.json(resjson))
      .catch(next);
  });
citiesRouter
  .route('/baseball/:baseball_id')
  .get((req, res, next) => {
    const { baseball_id } = req.params;
    CitiesService.getBaseballTeamById(req.app.get('db'), baseball_id)
      .then(team => {
        if(!team) {
          return res.status(404).json({
            error: { message : 'Team not found'}
          });
        }
        res.status(200).json(team);
        next();
      })
      .catch(next);
  });

citiesRouter
  .route('/baseball/playoffs')
  .get((req, res, next) => {
    CitiesService.getAllPlayoffs(req.app.get('db'))
      .then(resjson => res.json(resjson))
      .catch(next);
  });
citiesRouter
  .route('/baseball/playoffs/:baseball_id')
  .get((req, res, next) => {
    const { baseball_id } = req.params;
    CitiesService.getPlayoffsById(req.app.get('db'), baseball_id)
      .then(team => {
        if(!team) {
          return res.status(404).json({
            error: { message : 'Team not found'}
          });
        }
        res.status(200).json(team);
        next();
      })
      .catch(next);
  });

module.exports = citiesRouter;