/* eslint-disable no-console */
const app = require('./app');

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
