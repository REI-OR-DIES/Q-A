/* eslint-disable no-console */

const mongoose = require('mongoose');
const db = require('../database/db/index.js');
const regeneratorRuntime = require("regenerator-runtime");

const mongoURI = 'mongodb://localhost:27017/REI';
jest.useFakeTimers()

beforeAll(async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.on('error', console.error.bind(console, 'connection error'));
  mongoose.connection.once('open', () => {
    console.log('connection open for testing');
  });
});

afterAll(async () => {
  mongoose.disconnect();
  console.log('connection for testing has ended');
});
describe('Testing the API and database', () => {
  test('it should add a question', () => db.Qa.create({
    questionAuthor: 'Bob Smith',
    questionTitle: 'Jacket feel',
    questionCreatedAt: 1.20,
    questionBody: 'I was wondering how the jacket feels?',
    answers: 0,
    answer: {},
  })
    .then((results) => {
      expect(results).not.toBeNull();
    }));
  test('it should find question by questionAuthor', () => db.Qa.findOne({ questionAuthor: 'Bob Smith' })
    .then((results) => {
      expect(results).not.toBeNull();
    }));
  test('it should find the correct question by questionAuthor', () => db.Qa.findOne({ questionAuthor: 'Bob Smith' })
    .then((results) => {
      expect(results).toHaveProperty('questionTitle', 'Jacket feel');
    }));
  test('it should have a questionBody', () => db.Qa.findOne({ questionAuthor: 'Bob Smith' })
    .then((results) => {
      expect(results).toHaveProperty('questionBody', 'I was wondering how the jacket feels?');
    }));
  test('it should have a questionCreatedAt', () => db.Qa.findOne({ questionAuthor: 'Bob Smith' })
    .then((results) => {
      expect(results.questionCreatedAt).not.toBeNull();
    }));
  test('it should have an answers property', () => db.Qa.findOne({ questionAuthor: 'Bob Smith' })
    .then((results) => {
      expect(results.answers).not.toBeNull();
    }));
});

// it('GET list of questions', async (done) => {
//   const question = { mockQuestion: 'mockQuestion' };
//   const mock = jest.spyOn(database, 'findAllQuestions');
//   mock.mockResolvedValue(question);
//   jest.useFakeTimers();

//   request(app).get('/api/questions')
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .then((res) => {
//       expect(typeof res.body).toBe('object');
//       done();
//     });
// });

// // const requestId = (id) => request.get(`/api/questions/${id}`);

// describe('insert', () => {
//   let connection;
//   let db;

//   it('should add a new question to the collection', async () => {
//     const questions = db.collection('qas');

//     const sampleQuestion = { _id: 123450, questionAuthor: 'Lamar Jackson' };
//     await questions.insertOne(sampleQuestion);

//     const insertedQuestion = await questions.findOne({ _id: 123450 });
//     expect(insertedQuestion).toEqual(sampleQuestion);
//   });

//   it('should add the new question as an object',
//     async () => {
//       const questions = db.collection('qas');

//       const exampleQuestion = { _id: 22223, questionAuthor: 'Mark Ingram' };
//       await questions.insertOne(exampleQuestion);

//       const addedQuestion = await questions.findOne({ _id: 22223 });
//       expect(typeof addedQuestion).toEqual('object');
//     });
// });
