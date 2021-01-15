const { Qa } = require('./index.js');
const { mockData } = require('./MOCK_DATA.js');

Qa.find()
  .then((result) => {
    if (result.length === 0) {
      Qa.create(mockData);
    } else {
      console.log('db already seeded');
    }
  })
  .catch((err) => console.log('err seeding db', err));
