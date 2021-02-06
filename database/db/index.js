const pool = require('./dbData.js');



const findAllQuestions = (req, res) => {
  pool.query('SELECT * FROM questions', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
};

const addNewQuestion = (req, res) => {
  const { questionAuthor, questionTitle, questionBody } = req.body;
  pool.query('INSERT INTO questions (questionAuthor, questionTitle, questionBody) VALUES ($1, $2, $3)', [questionAuthor, questionTitle, questionBody], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};



// const answerQuestion = (questionId, newAnswer, callback) => {
//   Qa.findOneAndUpdate({ _id: questionId }, { $set: { answer: newAnswer } }, (err, results) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       incrementAnswersValue(questionId);
//       callback(null, results);
//     }
//   });
// };

module.exports = {
  findAllQuestions,
  addNewQuestion
};
