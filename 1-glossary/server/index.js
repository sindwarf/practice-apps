require("dotenv").config();
const express = require("express");
const path = require("path");
const controllers = require(path.join(__dirname, '/Controllers/Controllers.js'));
process.env.PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist/")));


app.get('/words', controllers.get);

app.post('/words', controllers.post);

app.put('/words', controllers.put);

app.delete('/words', controllers.delete);

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
