const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('./db.js');
const routes = require('./routes/route');

const app = express();

app.use(bodyParser.json());



// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', "http://localhost:4200");
//     res.header('Access-Control-Allow-Headers', true);
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     next();
// });

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

app.use(allowCrossDomain);

app.listen(3000, () => console.log('Server started at 3000'));

app.use('/employees', routes)

app.use(cors({
  origin: 'http://localhost://4200',
  // credentials: true
}));