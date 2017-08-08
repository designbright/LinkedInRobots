const express = require('express');
const routes = express.Router();
const db = require('../db');

routes.get('/', (req, res) => {
  let coll = db.get().collection('robotCollection');

  coll.find({}).toArray((err, robots) => {
    res.render('home', { users: robots });
  });
});

routes.get('/:userName', (req, res) => {
  let col = db.get().collection('robotCollection');

  col.findOne({username: req.params.userName}, (err, robot) => {
    res.render('job', robot);
  });
});

module.exports = routes;
