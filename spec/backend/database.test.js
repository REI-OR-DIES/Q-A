/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const mongoose = require('mongoose');
const regeneratorRuntime = require('regenerator-runtime');
const db = require('../../database/db/index.js');

const mongoURI = 'mongodb://localhost:27017/REI';
jest.useFakeTimers();

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
