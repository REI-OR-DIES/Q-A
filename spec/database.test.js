const { MongoClient } = require('mongodb');

const mongoURI = 'mongodb://localhost:27017/REI';

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoURI, {
      useNewUrlParser: true,
    });
    db = await connection.db('REI');
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should add a new question to the collection', async () => {
    const questions = db.collection('qas');

    const sampleQuestion = { _id: 123456, questionAuthor: 'Lamar Jackson' };
    await questions.insertOne(sampleQuestion);

    const insertedQuestion = await questions.findOne({ _id: 123456 });
    expect(insertedQuestion).toEqual(sampleQuestion);
  });
});
