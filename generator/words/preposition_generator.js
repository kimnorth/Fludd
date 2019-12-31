var words = require('./words.json');
var getRandomNumber = require('../random_number_generator');

var getRandomPreposition = function(){
	var randomNumber = getRandomNumber(1, words.Prepositions.length);
	return words.Prepositions[randomNumber];
}

module.exports = getRandomPreposition;