var Twitter = require('twitter');
var config = require('./config.js');
var generator = require('./generator/generator.js')
var T = new Twitter(config);

var newPostString = generator();

console.log(newPostString);