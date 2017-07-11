'use strict';

// ask a question and store the answer as a variable
var test = prompt('Am I 22 years old?');
test = test.toUpperCase();
console.log('the users input was ' + test);

// react to the user's answer to the question
if (test === 'YES') {
  alert('That is correct! I am 22 years young.');
  console.log('the user was correct');
} else if (test === 'NO') {
  alert('You are incorrect... I am infact 22 years young.');
  console.log('the user was incorrect');
} else {
  alert('Please enter either yes/no.  Thank you!');
}
