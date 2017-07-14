'use strict';

// function for button
function quiz() {

  // declare score variables
  var numCorrect = 0;
  var numIncorrect = 0;
  var numInvalid = 0;

  // define question array
  var questionArray = [];
  questionArray.push('Am I 22 years old?');
  questionArray.push('Was I born in Miami?');
  questionArray.push('Did I major in mechanical engineering?');
  questionArray.push('Do I have blue eyes?');
  questionArray.push('Am I interested in a software engineering job?');

  // define answers
  var correctAnswer = ['YES', 'NO', 'YES', 'NO', 'YES'];
  var correctA = ['Y', 'N', 'Y', 'N', 'Y'];

  // define incorrect answers
  var incorrectAnswer = ['NO', 'YES', 'NO', 'YES', 'NO'];
  var incorrectA = ['N', 'Y', 'N', 'Y', 'N'];

  // define correct alerts
  var correctAlert = [];
  correctAlert.push('That is correct! I am 22 years young.');
  correctAlert.push('That is correct! I wasn\'t born in Miami');
  correctAlert.push('That is correct.  I did graduate from Gonzaga University with a Mechanical Engineering degree.');
  correctAlert.push('You are correct! My eyes are hazel!');
  correctAlert.push('You are correct!! Of course I want a software engineering job after graduating from Code Fellows.  Please hire me!');


  // define incorrect alerts
  var wrongAlert = [];
  wrongAlert.push('You are incorrect... I am infact 22 years young.');
  wrongAlert.push('That is incorrect.  I was actually born in Seattle.');
  wrongAlert.push('That is incorrect.  I actually did recieve a degree in Mechanical Engineering from Gonzaga University.');
  wrongAlert.push('You are incorrect :/.  My eyes are actually hazel.');
  wrongAlert.push('That\'s incorrect :/.  I do want a software engineering job after graduating from Code Fellows.');

  for(var i = 0; i <= questionArray.length - 1; i++) {

    function question(i) {

      var ans = prompt(questionArray[i]).toUpperCase();

      // if(ans !== correctAnswer[i] || ans !== correctA[i] || ans !== incorrectAnswer[i] || ans !== incorrectA[i]) {
      //   i--;
      // }

      if(ans === correctAnswer[i] || ans === correctA[i]) {
        numCorrect++;
        alert(correctAlert[i] + '\n\nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect);
        console.log('got it right');
      } else if (ans === incorrectAnswer[i] || ans === incorrectA[i]) {
        numIncorrect++;
        alert(wrongAlert[i] + '\n\nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect);
        console.log('got it wrong');
      }

    }

    question(i);

  }


  // sixth question
  var correct = false;
  var n = Math.round(Math.random()*(20-1)+1);
  console.log('number: ' + n);
  var i = 0;

  // respond to sixth question
  while (i <= 3 && correct === false) {

    var ans = parseInt(prompt('Guess a number between 1-20. \n\n You have ' + (4 - i) + ' tries left.'));
    console.log('the user guessed ' + ans);

    var invalid = false;

    if (i === 3) {
      numIncorrect++;
      console.log('done');
    } else if (ans === n) {
      numCorrect++;
      alert('Correct! \n\nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
      console.log('correct');
      correct = true;
    } else if (ans > n) {
      alert('Too high.\n\nGuess again.');
      console.log('too high');
    } else if (isNaN(ans) === true) {
      invalid = true;
      alert('Invalid response, guess a number.')
      console.log('invalid response');
    } else {
      alert('Too low.\n\nGuess again.');
      console.log('too low');
    }

    if (invalid === false) {
      i++
    }

    console.log('number of tries: ' + i + '/4');
  }

  // notification if never gets sixth question right
  if (correct === false) {
    alert('Your tries are up... \n\nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
  }


  //seventh question
  var myAns = ['zach', 'sam', 'jeff'];
  console.log(myAns.length);

  var x = 0;
  var correct = false;

  while (x <= 5 && correct === false) {

    var ans = prompt('Guess the one of the names of my three brothers.  \n\nYou have ' + (6 - x) + ' guesses.');

    for(var i = 0; i < myAns.length; i++) {
      if (ans.toLowerCase() === myAns[i]) {
        correct = true;
        // alert('correct');
        console.log('correct guess');
      }
    }

    if (correct === true) {
      numCorrect++;
      alert('Correct! \n\nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
      console.log('correct');
    } else if (x === 5) {
      numIncorrect++;
      alert('Out of guesses. \n\nCorrect: ' + numCorrect + '\nIncorrect: ' + numIncorrect + '\nInvalid Responses: ' + numInvalid);
      console.log('done');
    } else {
      alert('Incorrect, guess again. \n\nYou have ' + (5 - x) + ' guesses left.');
      console.log('incorrect');
    }

    x++;
  }

  //calculate and display final score
  var score = numCorrect / (numCorrect + numIncorrect) * 100;
  alert('Nice work!\n\nFinal Score: ' + score + '% \nInvalid Responses: ' + numInvalid);
  console.log('the user scored a ' + score + '%');

 }
