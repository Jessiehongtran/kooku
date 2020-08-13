const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser')

const ingredientRoute = require('./api/ingredients/routes');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/ingredients', ingredientRoute)


module.exports = app;
