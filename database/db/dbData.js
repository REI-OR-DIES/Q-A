const Pool = require('pg').Pool
const pool = new Pool({
  user: 'pabloagonzalez',
  host: 'localhost',
  database: 'q_and_a',
  port: 5432
});

module.exports = pool;
