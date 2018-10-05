const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: 'postgres://postgres:haywhy4u@35.185.17.227:5432/fastfoodfast',
});

pool.on('connect', () => {
  console.log('connection to database successful');
});

/**
 * Create Tables
 */

const createTables = () => {
  const queryText = `CREATE TABLE
        menu (
          id SERIAL PRIMARY KEY,
          name VARCHAR(10) NOT NULL,
          description TEXT NOT NULL,
          price MONEY NOT NULL,
          quantity_available INTEGER NOT NULL,
          image VARCHAR(50)
        )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};
/**

  * Drop Tables

  */

const dropTables = () => {
  const queryText = 'DROP TABLE IF EXISTS users';
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};
pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createTables,
  dropTables,
};

require('make-runnable');