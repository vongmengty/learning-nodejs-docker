const app = require('express');
const route = app.Router();

require('./user')(route);

module.exports = route;