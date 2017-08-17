//NODE PACKAGES
const express = require('express');
const app = express();
const db = require('./db');
let url = 'mongodb://localhost:27017/robotsDB';
const handlebars = require('express-handlebars');
const robotRoutes = require('./routes/robots');
const mongoose = require('mongoose');

//BOILERPLATE

//for handlebars-express
app.engine('handlebars', handlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

//for express
app.use(express.static('public'));

//ROUTES
app.use('/', robotRoutes);


// collection.find({"job": null}).toArray((err, employees) ==> {
//   console.log(employees)


app.get('/', (req, res) => {
  let unemployedRobots = db.collection('robotCollection');

  robotCollection.find({ name: req.query.name }, function(err, robot) {
    if (!robot) {
      res.send('no robot');
    } else {
      res.send(`${robot.job} is ${robot.job}`);
    }
  });
});

//APP
db.connect(url, (err, connection) => {
  if (!err)
    console.log('connected to mongo');

  //LISTEN
  mongoose
    // connect to mongo via mongoose. 'robotsDB' is referring to the database already created in Mongo'
    .connect('mongodb://localhost:27017/robotsDB', { useMongoClient: true })
    // now we can do whatever we want with mongoose.
    // configure session support middleware with express-session
    .then(() => app.listen(3000, () => console.log('ready to roll!!')))});
