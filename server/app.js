const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
const notifier = updateNotifier({pkg});
notifier.notify();
console.log(notifier.update);
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const initSwagger = require('./middleware/swagger/initSwagger');
const initCookie = require('./middleware/cookie/initCookie');

const app = express();

initSwagger(app);
initCookie(app);

app.use(logger('dev'));
app.use(bodyParser.json());

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({
  extended: true,
}));

require('./routes')(app);

module.exports = app;
