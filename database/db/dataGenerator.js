const faker = require('faker');
const json2csv = require('json2csv').parse;
fs = require('fs');

// Writing to disk function, adds new line at of every row
const write = async (fileName, data) => {
  let rows;
  if (!fs.existsSync(fileName)) {
    rows = json2csv(data, { header: true });
  } else {
    rows = json2csv(data, { header: false });
  }
  fs.appendFileSync(fileName, rows);
  fs.appendFileSync(fileName, "\r\n");
};

const dataGenerator = (n) => {
  for (let i = 1; i <= n; i++) {
    let questions = [];
    let answers = [];
    let randNum = Math.floor(Math.random() * 10);

    // generates 0 - 9 random secondary records per primary record
    let recurse = (counter) => {
      if (counter !== randNum) {
        counter++;
      let ans = {
        answerAuthor: faker.name.firstName(),
        answerTitle: faker.random.words(),
        answerBody: faker.lorem.paragraph(),
        question_id: i,
        answerCreatedAt: faker.date.between('2020-11-01', '2021-01-01'),
        answerHelpfulYes: Math.floor(Math.random() * 10),
        answerHelpfulNo: Math.floor(Math.random() * 10)
      }
      recurse(counter);
      answers.push(ans);
      }
    }
    recurse(0);

    let quest = {
      questionAuthor: faker.name.firstName(),
      questionTitle: faker.random.words(),
      questionBody: faker.lorem.paragraph(),
      questionCreatedAt: faker.date.between('2020-11-01', '2021-01-01')
    };
    questions.push(quest);

    write('./questions.csv', questions);
    write('./answers.csv', answers);
  }
};

dataGenerator(10000000);
