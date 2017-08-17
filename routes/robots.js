const express = require('express');
const routes = express.Router();
const db = require('../db');

routes.get('/', (req, res) => {
  let collection = db.get().collection('robotCollection');

  collection.find({}).toArray((err, robots) => {
    res.render('home', { users: robots });
  });
});

routes.get('/unemployed', (req, res) => {
  let unemployedRobotscollection = db.get().collection('unemployed');

  unemployedRobotscollection.find({}).toArray((err, robots) => {
    res.render('home', { users: robots });
  });
});

routes.get('/employed', (req, res) => {
    let employedRobots = db.get().collection('robotCollection');

    employedRobots.find({"job" : {$ne: null}}).toArray((err, robots) => {
      res.render('home', { users: robots });
});
});

routes.get('/:userName', (req, res) => {
  let collection = db.get().collection('robotCollection');

  collection.findOne({username: req.params.userName}, (err, robot) => {
    res.render('job', robot);
  });

});

module.exports = routes;
