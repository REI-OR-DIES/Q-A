const request = require('supertest');
const express = require('express');
const api = require('../server/api');

const app = express();

app.use('/api', api);
