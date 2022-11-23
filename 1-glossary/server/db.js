const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost:27017/glossary', {useNewUrlParser : true});
// 2. Set up any schema and models needed by the app

const wordSchema = new mongoose.Schema({
  word : String,
  description : String
})



exports.save = (wordObj, callback) => {
  let entry = {};
  entry.word = wordObj.word;
  entry.description = wordObj.description;
  const word = mongoose.model(wordSchema, entry);
    word.save((err) => {
      if(err) {
        callback(err);
      } else {
        callback(null);
      }
    })
}

// 3. Export the models
// 4. Import the models into any modules that need them
