const express = require('express');
const app = express();
const cors = require('cors');

const ingredientRoute = require('./api/ingredients/routes');

app.use(cors());
app.use('/api/ingredients', ingredientRoute)


module.exports = app;
