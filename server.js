'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const route = require('./app/routes/index');
const {response} = require('./app/helpers/response');

require('dotenv').config();
require('./config/database.config').connect();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(response);

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/v1', route);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);