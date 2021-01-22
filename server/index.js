/* eslint-disable no-console */

const app = require('./app');

const PORT = 3007;

app.listen(PORT, (err) => {
  if (err) {
    console.err(err);
  } else {
    console.log(`listening on port ${PORT}`);
  }
});
