var Twitter = require('twitter');
var config = require('./config.js');
var generator = require('./generator/generator.js');

var T = new Twitter(config);

var newPostString = generator();

var postNewTweet = function(){
	newPostString = generator();
	console.log(newPostString);	
}

postNewTweet(newPostString);

setInterval(postNewTweet, 1500);