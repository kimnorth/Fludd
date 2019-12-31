const express = require('express');
const server = express();
// var Twitter = require('twitter');
// var config = require('./config.js');
var generator = require('./generator/generator.js')

// var T = new Twitter(config);
var newPostString = generator();

server.get('/', function(req, res){
	res.send("hello world")
	console.log(newPostString);
})

server.listen(3000);