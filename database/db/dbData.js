const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'q_and_a',
  port: 5432
});

module.exports = pool;
