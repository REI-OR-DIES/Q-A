const faker = require('faker');
fs = require('fs');

const questionGenerator = (n) => {
  let questions = [];
  for (let i = 0; i < n; i++) {
    let quest = {
      questionAuthor: faker.name.firstName(),
      questionTitle: faker.random.words(),
      questionBody: faker.lorem.paragraph()
    };
    questions.push(quest);
  }
  return questions;
};
let questions = questionGenerator(2);

const answersGenerator = (n) => {
  let answers = [];
  for (let i = 1; i <= n; i++) {
    let randNum = Math.floor(Math.random() * 10);
    let recurse = (counter) => {
      if (counter !== randNum) {
        counter++;
      let ans = {
        answerAuthor: faker.name.firstName(),
        answerTitle: faker.random.words(),
        answerBody: faker.lorem.paragraph(),
        question_id: i,
        answerHelpfulYes: Math.floor(Math.random() * 10),
        answerHelpfulNo: Math.floor(Math.random() * 10)
      }
      answers.push(ans);
      recurse(counter);
      }
    }
    recurse(0);
  }
  return answers;
};
let answers = answersGenerator(2);
let data = JSON.stringify([...questions, ...answers])
fs.writeFile('mock_data.js', data, err => {
  if (err) return console.log(err);
});
