const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./api');

const app = express();
app.use('/api', api);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

module.exports = app;
