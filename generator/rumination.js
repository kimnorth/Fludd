var getRandomNumber = require('./random_number_generator.js');
var getPreposition = require('./words/preposition_generator.js');
var getPronoun = require('./words/pronoun_generator.js')
var getGlibStatement = require('./words/glib_statement_generator.js');
var words = require('./words/words.json');

var finalSentence;
var randomNumber;
var randomAdjective;
var randomNoun;
var sentenceEnding;
var randomMiddleSentence;

// Generate a random sentence describing an imaginary fanatastical scene

var generateMiddleSentence = function(){
	var newSentence = "";
	// get HBAdjective
	var randomNumber = getRandomNumber(1, words.HBAdjectives.length);
	var randomAdjective = words.HBAdjectives[randomNumber];
	// get subject MNoun
	randomNumber = getRandomNumber(1, words.MNouns.length);
	var randomNounSubject = words.MNouns[randomNumber];
	// get present tense verb
	randomNumber = getRandomNumber(1, words.HBVerbs.length);
	var randomVerb = words.HBVerbs[randomNumber];
	// get object MNoun
	randomNumber = getRandomNumber(1, words.HBNouns.length);
	var randomNounObject = words.HBNouns[randomNumber];
	// get preposition
	randomNumber = getRandomNumber(1, words.Prepositions.length);
	var randomPreposition = words.Prepositions[randomNumber];
	// get proNoun
	randomNumber = getRandomNumber(1, words.Pronouns.length);
	var randomPronoun = words.Pronouns[randomNumber];
	// get mRandomAdjective
	randomNumber = getRandomNumber(1, words.MAdjectives.length);
	var mRandomAdjective = words.MAdjectives[randomNumber];
	// get HBNoun
	randomNumber = getRandomNumber(1, words.HBNouns.length);
	var hbRandomNoun = words.HBNouns[randomNumber];
	// Work out the article a / an / the
	// Add it all together
	newSentence += ("The " + 
		randomAdjective + 
		" " + 
		randomNounSubject + 
		" " + randomVerb + 
		"s " + 
		"the " + 
		randomNounObject +
		" " +
		randomPreposition +
		" " +
		randomPronoun +
		" " +
		mRandomAdjective +
		" " +
		hbRandomNoun
		);
	return newSentence;
}

var pickQuestionOrStatement = function(){
	var text = "";
	var randomNumber = getRandomNumber(1, 3);
	if(randomNumber == 1){
		randomNumber = getRandomNumber(1, words.Questions.length);
		text = words.Questions[randomNumber];
	}
	else if(randomNumber == 2){
		randomNumber = getRandomNumber(1, words.Statements.length);
		text = words.Statements[randomNumber];
	}
	return text;
}

var rumination1 = function(){
	finalSentence = "";
	randomMiddleSentence = "";
	randomNumber = getRandomNumber(1, words.MAdjectives.length);
	randomAdjective = words.MAdjectives[randomNumber];
	randomNumber = getRandomNumber(1, words.HBNouns.length);
	randomNoun = words.HBNouns[randomNumber];
	// Question or closing statement
	
	// Physical description
	// The *noun (pluralised)* *present tense verb* *preposition* *object*
	randomMiddleSentence = generateMiddleSentence();
	sentenceEnding = pickQuestionOrStatement();
	// The *noun (pluralised)* are *adjective*
	// *Adjective* *noun (pluralised)* *present tense verb* *adverb*
	finalSentence += randomAdjective + " " + randomNoun + ". " + randomMiddleSentence + ". " + sentenceEnding;
	return finalSentence;
}

var rumination2 = function(){
	finalSentence = "test";
	return finalSentence;
}

var rumination = function(){
	var whichRumination = getRandomNumber(1, 3);
	switch(whichRumination){
		case 1:
			return rumination1();
			break;
		case 2:
			return rumination2();
			break;
		default:
			return "Borked!";
	}
}

module.exports = rumination;