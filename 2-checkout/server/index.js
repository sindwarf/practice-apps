require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
process.env.PORT = process.env.PORT || 3000;

// Establishes connection to the database on server start
const db = require("./db");

const app = express();
app.use(express.json());

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// app.get('/confirmation', (req, res) => {
//   db.getAll((err, response) => {
//     if(err) {
//       res.status(404).json('Problem getting from table');
//     } else {
//       res.status(201).json(response);
//     }
//   })
// });

app.post('/account', (req, res) => {
  let params = [
     req.session_id,
     req.body.name,
     req.body.email,
     req.body.password,
     req.body.addressLine1,
     req.body.addressLine2,
     req.body.city,
     req.body.state,
     req.body.zip,
     req.body.phoneNumber,
     req.body.creditCard,
     req.body.expiryDate,
     req.body.cvv,
     req.body.billingZip];

  db.createForm(params, (err) => {
    if(err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      res.sendStatus(201);
    }
  })
});

// app.put('/contactInfo', (req, res) => {
//   db.addContact(req.body, (err) => {
//     if(err) {
//       res.sendStatus(404);
//     } else {
//       res.sendStatus(201);
//     }
//   })
// });

// app.put('/payment', (req, res) => {
//   db.addPayment(req.body, (err) => {
//     if(err) {
//       res.sendStatus(404);
//     } else {
//       res.sendStatus(201);
//     }
//   })
// });

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
