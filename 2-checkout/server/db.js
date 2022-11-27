const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (session_ID varchar(11),      name varchar(20),      email varchar(20),      password varchar(20),      address1 varchar(60),      address2 varchar(60),      city varchar(20),      state varchar(20),      zipCode integer(11),      phone integer(11),      creditCard integer(11),      expiryDate integer(11),      cvv integer(11),      billingZip integer(11))"))
  .catch((err) => console.log(err));

// exports.getAll = (callback) => {
//   let q = 'SELECT * FROM user';
//   connection.query(q, (err, results) => {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   })
// }

exports.createForm = (params, callback) => {
  console.log('params', params)
  let q = 'INSERT INTO responses VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(q, params, callback)
}

// exports.addContact = (info, callback) => {

// }

// exports.addPayment = (info, callback) => {

// }


