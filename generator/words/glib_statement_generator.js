var words = require('./words.json');
var getRandomNumber = require('../random_number_generator');

var getGlibStatement = function(){
	var randomNumber = getRandomNumber(1, words.Statements.length);
	return words.Statements[randomNumber];
}

module.exports = getGlibStatement;