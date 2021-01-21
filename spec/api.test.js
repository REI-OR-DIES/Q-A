const request = require('supertest');
const express = require('express');
const api = require('../server/api');
const database = require('../database/db/index.js')
const regeneratorRuntime = require("regenerator-runtime");

const app = express();
jest.useFakeTimers()

app.use('/api', api);

describe('GET /api/questions' , () => {
  it('GET list of questions', async (done) => {
    request(app).get('/api/questions')
      .expect(200)
      .then((res) => {
        expect(typeof res.body).toBe('object');
        done();
      });
  });
})


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
