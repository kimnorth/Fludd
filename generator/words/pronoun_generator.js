var words = require('./words.json');
var getRandomNumber = require('../random_number_generator');

var getRandomPronoun = function(){
	var randomNumber = getRandomNumber(1, words.Pronouns.length);
	return words.Pronouns[randomNumber];
}

module.exports = getRandomPronoun;