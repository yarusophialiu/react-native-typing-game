"use strict";

var path = require('path');
var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'main'}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

var unused = false;

app.get('/', function(req, res) {
  ress.render('index', {
    data: require('./data.json')
  });
});


app.listen(3000);
