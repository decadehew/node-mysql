const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  port: 'port',
  database: 'db name'
});

connection.connect();
const sql = 'select * from users;';
connection.query(sql, (err, result) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(result);
});

connection.end();
