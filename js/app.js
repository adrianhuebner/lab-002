"use strict"



// function asking the user for their name prompt
function userName(){
  var UserName = prompt('Hi! My name is Adrian! What\'s your name?');
  alert('Hello ' + UserName + '! It\'s nice to meet you! We are going to see how well you know me with a guessing game!');
  console.log('Function asking user for UserName variable');
}
userName();

// creating global function yourScore

var yourScore = 0;

// asking the user if they knew where I grew up
function Question1(){
  var grewUp = prompt('Did I grow up in the same house that my father did?');
  console.log('Asking user about question 1');
  if (grewUp.toLowerCase() === 'yes') {
    alert('Yes! I did grow up in the same house as my father!');
    yourScore ++;
  } else {
    alert('Actually, I did grow up in the same house that my father grew up in!');
    console.log('in the else statement of first question to user');
  }
  console.log('end of function of question 1');
}
Question1();

// asking the user if they know how many siblings I have


// creating an if/else statement about my sister
function Question2(){
var siblingAmmount = prompt('Do I have more than one sibling?');
if (siblingAmmount.toLowerCase() === 'no') {
  alert('That\s right, I only have one sister!');
  yourScore += 1;
}else {
  alert('Actually I only have one younger sister.');
  console.log('Asking if they know how many siblings that I have.');

}
console.log('end of function of question2');
}
Question2();

// asking the user about where I went to school


//creating an if/else statement about school
function Question3(){
var typeEducation = prompt('Did I go to private school from Preschool to High School?');
if (typeEducation.toLowerCase() === 'yes') {
  alert('Yes, against my will, I attended private school from Preschool to High School');
  yourScore += 1;
} else {
  alert('Actually, I was forced to go to private school from Preschool through High School.');
  console.log('I am in the else statement of question3');
}
console.log('End of function for question3');
}
Question3();

// asking the user who caused my love of reading
var dadReads = prompt('Do you think that it was my mom who helped me begin to love to read?');

// creating an if/else statement about my love of reading
if (dadReads.toLowerCase() === 'no') {
  alert('It was actually my dad who got me to love reading!');
  yourScore +=1;
} else{
  alert('Actually, ' + UserName + ' it was my dad create my love of reading.');
}
console.log('Asking ' + UserName + ' whether or not it was my dad who made me love to read.');

// // asking the user if I love Nancy Drew
// var nancyDrew = prompt('Do you think that Nancy Drew is my go to comfort book series?');

// // creating an if/else statement about Nancy Drew
// if (nancyDrew.toLowerCase() === 'yes') {
//   alert('Yes, that\s the first thing that my dad ever read to me, so if I ever need something to cheer me up, I read any book in that series!');
//   yourScore += 1;
// } else{
//   alert('Actually, my that was the first thing that my dad ever read to me, so if I ever am in a bad mood or need to not think about what I am reading I choose that!');
// }
// console.log('Asking ' + UserName + ' if they know that I love Nancy Drew!');

// //beginning of guessing game

// var answer= 450;
// var guess= parseInt(prompt('How many books do you think I own?'));

// for (var i = 0; i < 3; i++){
//   if (guess === answer){
//     alert('You know how bad my book obesession is!!');
//     yourScore += 1;
//     break;
//   }
//     else if (guess > 450){
//       guess = parseInt(prompt('That number was wrong, it was a little to high! As Henry Ford says "Failure is only the opportunity to being again, only this time more wisely".'));
//       console.log('I am in else if');
//     }
//     else {
//       guess = parseInt(prompt('That number was wrong, perhaps you should try something bigger! As Henry Ford says "Failure is only the opportunity to being again, only this time more wisely".'));
//       console.log('I am in the if check');
//     }
// }

// //  //starting my array work here

// var answerArray= ['Nancy Drew', 'Pride and Prejudice', 'Harry Potter and the Prisoner of Azkaban', 'Furyborn', 'The Cruel Prince'];
// var escape= false;
// var numGuesses= 0;
// console.log('Starting out my array questions');

//  while(numGuesses < 6 && escape === false){
//  var answer= prompt('What are my top 5 favorite books?');
//   for (var i = 0; i < answerArray.length; i++){
//     if (answer === answerArray[i]){
//       alert('Yay! You know about one of my favorite books!');
//       console.log('Figuring out my array');
//       yourScore += 1;
//       escape = true;
//       break;
// }
// }
// numGuesses++;
//  }

//  // creating an alert for all my books I like
//  alert('Here is the list of all of my favorite books are Nancy Drew by Harriet Adams, Pride and Prejudice by Jane Austen, Harry Potter and the Prisoner of Azkaban by J.K. Rowling, Furyborn by Claire Legrand, and The Cruel Prince by Holly Black');

//  // creating an alert that lets users know how well they know me
// if (yourScore < 5){
//   alert('Oh no your score is ' + yourScore + ' it looks like you don\'t know me that well! Visit that website to fix that!');
//   console.log('In my if for score card');
// } else {
//   alert('You\'re score of ' + yourScore + ' looks pretty high! You must know me pretty well!');
//   console.log('In my else for score card');
// }

