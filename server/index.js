const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3007;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { findAllQuestions } = require('../database/db/index.js')

app.get('/api/questions', (req, res) => {
  findAllQuestions((err, results) => {
    if (err) {
      console.log('err in getting Qs')
      res.status(500).send(err)
    } else {
      console.log('success in getting Qs')
      res.status(200).send(results);
    }
  });
});

app.listen(PORT, (err) => {
  if (err) { console.log('err starting server'); } else {
    console.log(`listening on port ${PORT}`)
  }
})