const express = require('express');
const bodyParser = require('body-parser');

const { findAllQuestions, addNewQuestion, answerQuestion } = require('../database/db/index.js');

const app = express.Router();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/questions', (req, res) => {
  findAllQuestions((err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/questions', (req, res) => {
  const question = {
    questionAuthor: req.body.questionAuthor,
    questionTitle: req.body.questionTitle,
    questionCreatedAt: req.body.questionCreatedAt,
    questionBody: req.body.questionBody,
    answers: req.body.answers,
    answer: req.body.answer,
  };
  addNewQuestion(question, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      findAllQuestions((err, results) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(results);
        }
      });
    }
  });
});

app.put('/questions/:id', (req, res) => {
  const { id } = req.params;
  const answer = req.body.answer;
  answerQuestion(id, answer, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      findAllQuestions((err, results) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(results);
        }
      });
    }
  });
});

module.exports = app;