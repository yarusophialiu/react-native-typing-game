"use strict";
var mongoose = require('mongoose');
mongoose.connect(require('./connect'));

var Word = mongoose.model('Word', {
  word: {
    type: String,
    required: true
  },
  len: {
    type: Number,
    required: true
  },
  number: {
    type: Number,
    required: true
  }
});

function time(name, query) {
  var start = Date.now();
  query.exec(function() {
    console.log('%s: Time taken %sms', name, Date.now() - start);
  });
}

time('findOne()', Word.findOne());
time('findOne({word:"expensive"})', Word.findOne({word: 'expensive'}));
time('findOne({word:"expensive", len: 20})', Word.findOne({word: 'expensive', len: 20}));
time('findOne().sort()', Word.findOne().sort({word: 1}));
