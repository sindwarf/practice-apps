const db = require('../db.js');

exports.readAll = (callback) => {
  db.getAll(callback);
}

exports.create = (wordObj, callback) => {
  db.save(wordObj, callback);
}

exports.update = (wordObj, callback) => {
  db.updateWord(wordObj, callback);
}

exports.delete = (wordString, callback) => {
  db.deleteWord(wordString, callback);
}
