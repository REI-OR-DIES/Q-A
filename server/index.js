const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3007;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { findAllQuestions, addNewQuestion, answerQuestion } = require('../database/db/index.js');

app.get('/api/questions', (req, res) => {
  findAllQuestions((err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/api/questions', (req, res) => {
  const question = {
    questionAuthor: req.body.questionAuthor,
    questionTitle: req.body.questionTitle,
    questionCreatedAt: req.body.questionCreatedAt,
    questionHelpfulYes: req.body.questionHelpfulYes,
    questionHelpfulNo: req.body.questionHelpfulNo,
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

app.put('/api/questions/:id', (req, res) => {
  const { id } = req.params;
  const { answer } = req.body;
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

app.listen(PORT, (err) => {
  if (err) {
    console.err(err);
  } else {
    console.log(`listening on port ${PORT}`);
  }
});

module.exports = {

};
