require('dotenv').config();
var express = require('express');
var app = express();
var test = require('./controllers/testcontroller');
var authtest = require('./controllers/authtestcontroller');
var user = require('./controllers/usercontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

app.listen(3000, function() {
  console.log('Hey man!!!.')
});

sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use('/test', test);

app.use('/api/user', user);

app.use(require('./middleware/validate-session'));
app.use('/authtest', authtest);