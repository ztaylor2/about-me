'use strict';

// function justed used for button, not for writing less code 
function quiz() {

// declare score variables
var numCorrect = 0;
var numIncorrect = 0;
var numInvalid = 0;

// ask first question then store the answer as a variable and set to upper case
var age = prompt('Am I 22 years old?');
age = age.toUpperCase();
console.log('the users input was ' + age);

// react to the user's answer to first question
if (age === 'YES' || age === 'Y') {
  numCorrect++;
  alert('That is correct! I am 22 years young. \nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
  console.log('the user was correct');
} else if (age === 'NO' || age === 'N') {
  numIncorrect++;
  alert('You are incorrect... I am infact 22 years young. \nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
  console.log('the user was incorrect');
} else {
  numInvalid++;
  alert('Please enter yes/no.  Thank you! \nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
  console.log('the user did not input either yes or no');
}

// second question
var birthPlace = prompt('Was I born in Miami?');
birthPlace = birthPlace.toUpperCase();
console.log('the user guessed ' + birthPlace + ' when asked if I was born in Miami');

// reaction to second question
if (birthPlace === 'YES' || birthPlace === 'Y') {
  numIncorrect++;
  alert('That is incorrect.  I was actually born in Seattle. :/ \nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
  console.log('the user was incorrect');
} else if (birthPlace === 'NO' || birthPlace === 'N') {
  numCorrect++;
  alert('That is correct! I wasn\'t born in Miami, I was born in Seattle. :-)\nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
  console.log('the user was correct');
} else {
  numInvalid++;
  alert('Please input a response of either yes/no or y/n.  Thank you! \nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid)
  console.log('the user did not input yes/no or y/n');
}

// third question
var major = prompt('Did I major in mechanical engineering at Gonzaga University?');
major = major.toUpperCase();
console.log('the user answered ' + major + ' to did I major in ME at GU');

// reaction to third question
if (major === 'YES' || major === 'Y') {
  numCorrect++;
  alert('That is correct.  I did graduate from Gonzaga University with a Mechanical Engineering degree.\nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
  console.log('the user was correct');
} else if (major === 'NO' || major === 'N') {
  numIncorrect++;
  alert('That is incorrect.  I actually did recieve a degree in Mechanical Engineering from Gonzaga University.\nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
  console.log('the user\'s answer was incorrect')
} else {
  numInvalid++;
  alert('Please enter either Yes/No or Y/N\nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
  console.log('the user\'s input was invalid');
}

// fourth question
var eyeColor = prompt('Do I have blue eyes?');
eyeColor = eyeColor.toUpperCase();
console.log('the user answered ' + eyeColor + 'to do i have blue eyes')

// reaction to fourth question
if (eyeColor === 'YES' || eyeColor === 'Y') {
  numIncorrect++;
  alert('You are incorrect :/.  My eyes are actually hazel.\nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
  console.log('the user answered incorrectly');
} else if (eyeColor === 'NO' || eyeColor === 'N') {
  numCorrect++;
  alert('You are correct! My eyes are hazel! :-) \nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
  console.log('the user answered correcly');
} else {
  numInvalid++;
  alert('Please answer either Y/N.  Thanks! \nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
  console.log('The user\'s input was invalid');
}

// fifth question
var interests = prompt('Am I interested in aquiring a software engineering job in the Seattle area after graduating from Code Fellows?');
interests = interests.toUpperCase();
console.log('the user\'s answer was ' + interests);

// reaction to fifth question
if (interests === 'YES' || interests === 'Y') {
  numCorrect++;
  alert('You are correct!! Of course I want a software engineering job after graduating from Code Fellows.  Please hire me! \nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
  console.log('the user was correct');
} else if (interests === 'NO' || interests === 'N') {
  numIncorrect++;
  alert('That\'s incorrect :/.  I do want a software engineering job after graduating from Code Fellows. \nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
  console.log('the user was incorrect');
} else {
  numInvalid++;
  alert('Please enter either Yes/No or Y/N.  Thank you! \nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
  console.log('the user did not submit a valid input');
}

//calculate and display final score
var score = numCorrect / (numCorrect + numInvalid + numIncorrect) * 100;
alert('Final Score: ' + score + '%');
console.log('the user scored a ' + score + '%');

}
