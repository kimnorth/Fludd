var words = require('./words/words.json');

var getRandomNumber = function(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

var finalSentence;
var randomNumber;
var randomAdjective;
var randomNoun;
var randomQuestion;

var rumination1 = function(){
	finalSentence = "";
	randomNumber = getRandomNumber(1, words.Adjectives.length);
	randomAdjective = words.Adjectives[randomNumber];
	randomNumber = getRandomNumber(1, words.HBNouns.length);
	randomNoun = words.HBNouns[randomNumber];
	randomNumber = getRandomNumber(1, words.Questions.length);
	randomQuestion = words.Questions[randomNumber];
	finalSentence += randomAdjective + " " + randomNoun + ". " + randomQuestion;
	return finalSentence;
}

var rumination2 = function(){
	finalSentence = "";
}

var rumination = function(){
	return rumination1();
}

module.exports = rumination;