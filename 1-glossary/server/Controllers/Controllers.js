const models = require('../Models/Models.js');




exports.get = (req, res) => {
  console.log(`PROCESSING REQUEST TYPE ${req.method} AT ${req.url}`);
  models.readAll((err, data) => {
    if(err) {
      res.sendStatus(404);
    } else {
      res.status(201).json(data);
    }
  });
};

exports.post = (req, res) => {
  console.log(`PROCESSING REQUEST TYPE ${req.method} AT ${req.url}`);
  //this will come in as an object
  let wordObj = {};
  wordObj.word = req.body.word;
  wordObj.description = req.body.description;
  models.create(wordObj, (err) => {
    if(err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  });
};

exports.put = (req, res) => {
  console.log(`PROCESSING REQUEST TYPE ${req.method} AT ${req.url}`);
  let wordObj = {};
  wordObj._id = req.body._id;
  wordObj.word = req.body.word;
  wordObj.description = req.body.description;
  models.update(wordObj, (err) => {
    if(err) {
      res.sendStatus(404);
    } else{
      res.sendStatus(201);
    }
  });
};

exports.delete = (req, res) => {
  console.log(`PROCESSING REQUEST TYPE ${req.method} AT ${req.url}`);
  let id = req.query.id;
  console.log(id);
  models.delete(id, (err) => {
    if(err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  })
};