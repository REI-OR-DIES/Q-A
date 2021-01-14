const { Qa } = require('./index.js');
//const faker = require('faker');
const { mockData } = require('./MOCK_DATA.js');
console.log('hello')
console.log('mockdatalength ', mockData.length);

Qa.find()
  .then((result) => {
    if (result.length === 0) {
      Qa.create(mockData)
    } else {
      console.log('db already seeded')
    }
  })
  .catch((err) => console.log('err seeding db', err))