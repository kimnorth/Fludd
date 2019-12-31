var rumination = require('./rumination.js')

// Work out what type of sentence is being created
// 1 = Moody Rumination

var getRandomNumber = function(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

var randomSentenceType = getRandomNumber(1, 2);

// var randomSentenceType = getRandomNumber(1, 6);

var getRandomSentenceType = function(){
	var randomSentenceString;
	switch(randomSentenceType){
	case 1:
		randomSentenceString = rumination();
		break;
	default:
		randomSentenceString = "It's broken";
	}
	return randomSentenceString;
}

// Get all the parts of that sentence from each json file

// Check that there are no word repetitions from the last tweet

// Return the complete string in the generator function

var generator = function(){
	randomSentenceType = getRandomNumber(1, 2);
	// console.log(randomSentenceType)
	return getRandomSentenceType();
}

module.exports = generator;