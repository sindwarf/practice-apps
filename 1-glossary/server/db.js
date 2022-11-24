const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost:27017/glossary', {useNewUrlParser : true});
// 2. Set up any schema and models needed by the app

const wordSchema = new mongoose.Schema({
  word : String,
  description : String
})

const Word = mongoose.model('Word', wordSchema);


exports.save = (wordObj, callback) => {
  Word.find({word : wordObj.word}, (err, data) => {
    if(err) {
      callback(err);
    } else if(data.length !== 0) {
      callback('User already exists', null);
    } else {
      const newWord = new Word(wordObj);

      newWord.save((err) => {
        if(err) {
          callback(err);
        } else {
          callback(null);
        }
      })
    }
  })


}

exports.getAll = (callback) => {
  Word.find().exec(callback);
}

exports.updateWord = (word, callback) => {

}

exports.deleteWord = (id, callback) => {
  Word.find({_id : id}, (err, data) => {
    if(err) {
      callback(err);
    } else {
      if(data.length === 0) {
        callback('User does not exist');
      } else {
        Word.deleteOne({_id : id}).exec(callback);
      }
    }
  });

}

// 3. Export the models
// 4. Import the models into any modules that need them
