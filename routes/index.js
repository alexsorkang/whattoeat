var express = require('express');
var app = express.Router();

/* GET home page. */
// app.get('/', function(req, res, next) {
//   var foods = {'asian':['korean', 'chinese', 'japanese', 'vietnamese', 'thai'], 'american': ['american bbq', 'hamburger'], 'mexican': ['taco', 'burrito']};
//   res.render('index', { title: 'What should I eat?', foods: foods});
// });

app.get('/', (req, res) => {
  var foods = {'asian':['korean', 'chinese', 'japanese', 'vietnamese', 'thai'], 'american': ['american bbq', 'hamburger'], 'mexican': ['taco', 'burrito']};
  res.render('index', { title: 'What should I eat?', foods: foods});
});

module.exports = app;
