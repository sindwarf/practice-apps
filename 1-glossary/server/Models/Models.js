const db = require('../db.js');

exports.readAll = (callback) => {
  callback(null , 'word data');
}

exports.create = (wordObj, callback) => {
  db.save(wordObj, callback);
}