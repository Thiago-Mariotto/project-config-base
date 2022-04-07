const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'database',
  user: 'root',
  password: 'docker',
  port: '3306',
});

module.exports = connection;
