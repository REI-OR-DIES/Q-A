/* eslint-disable no-unused-vars */

const regeneratorRuntime = require('regenerator-runtime');
const request = require('supertest');
const express = require('express');
const api = require('../../server/api');

const app = express();
jest.useFakeTimers();

app.use('/api', api);

describe('GET /api/questions', () => {
  it('GET list of questions', async (done) => {
    request(app).get('/api/questions')
      .expect(200)
      .then((res) => {
        expect(typeof res.body).toBe('object');
        done();
      });
  });
});
describe('POST /api/questions', () => {
  it('POST a new question', async (done) => {
    const testQuestion = {
      questionAuthor: 'Stephen Curry',
      questionTitle: 'Basketball',
      questionCreatedAt: 1.20,
      questionBody: 'Can I play basketball in this?',
      answers: 0,
      answer: {},
    };
    request(app).post('/api/questions', testQuestion)
      .expect(200)
      .then((res) => {
        expect(typeof res.body).resolves.toBe('object');
        done();
      });
  });
});

describe('PUT /api/questions/:id', () => {
  it('PUT an answer on an existing question', async (done) => {
    const id = '6008719e6f61ce629bc07ae7';
    const testUpdate = {
      answer: {
        answerTitle: 'It is great',
        answerAuthor: 'James Harden',
        answerCreatedAt: 1.20,
        answerBody: 'Oh yeah I love playing basketball in this',
        answerHelpfulYes: 2,
        answerHelpfulNo: 0,
      },
    };
    request(app).put(`/api/questions/${id}`)
      .send(testUpdate)
      .expect(200)
      .then((res) => {
        expect(typeof res.body).resolves.toBe('object');
        done();
      });
  });
});

// const requestId = (id) => request.get(`/api/questions/${id}`);

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
