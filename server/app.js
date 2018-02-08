// // import files and packages up here
var express = require('express')
var morgan = require('morgan')
var data = require('./data.json')

var app = express();

// create your express server below
app.use(morgan('dev'));

app.get('/',
(req, res) => {
  res.send('Hello World!');
  console.log('Success!')
}
);

app.get('/data',
  (req, res) => {
    res.send(data);
    console.log('Success!')
  }
);

// // add your routes and middleware below

var router = express.Router([data]);

// // finally export the express application
module.exports = app;
