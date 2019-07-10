//"use strict"

// asking the user for their name prompt
var UserName = prompt('Hi! My name is Adrian! What`s your name?');
alert('Hello ' + UserName + '! It\s nice to meet you! We are going to see how well you know me with a guessing game!');
console.log('Learning the name of ' + UserName + ' who, is going to play a game about me! Please, answer with a yes or a no to each question.');

// asking the user if they knew where I grew up
var grewUp = prompt('Do you think that I grew up in the same house that my father grew up in?');

// creating and if/else statement about where I grew up
if (grewUp.toLowerCase() === 'yes') {
  alert('Yes! I did grow up in the same house as my father!');
} else {
  alert('Actually, I did grow up in the same house that my father grew up in!');
}
console.log('My first question is asking ' + UserName + ' if they knew that I grew up in the same house as my father.');

// asking the user if they know how many siblings I have
var siblingAmmount = prompt('Do I have more than one sibling?');

// creating an if/else statement about my sister
if (siblingAmmount.toLowerCase() === 'no') {
  alert('That\s right, I only have one sister!');
}else {
  alert('Actually ' + UserName + ' I only have one younger sister.');
}
console.log('Asking ' + UserName + 'if they know how many siblings that I have.');

// asking the user about where I went to school
var typeEducation = prompt('Did I go to private school from Preschool to High School?')

//creating an if/else statement about school
if (typeEducation.toLowerCase() === 'yes') {
  alert('Yes, against my will, I attended private school from Preschool to High School');
} else {
  alert('Actually, I was forced to go to private school from Preschool through High School.')
}
console.log('Asking ' + UserName + ' about if I attened private or public schooling.')

// asking the user who caused my love of reading
var dadReads = prompt('Do you think that it was my mom who helped me begin to love to read?')

// creating an if/else statement about my love of reading
if (dadReads.toLowerCase() === 'no') {
  alert('It was actually my dad who got me to love reading!');
} else{
  alert('Actually, ' + UserName + ' it was my dad create my love of reading.');
}
console.log('Asking ' + UserName + ' whether or not it was my dad who made me love to read.');

// asking the user if I love Nancy Drew
var nancyDrew = prompt('Do you think that Nancy Drew is my go to comfort book series?');

// creating an if/else statement about Nancy Drew
if (nancyDrew.toLowerCase() === 'yes') {
  alert('Yes, that\s the first thing that my dad ever read to me, so if I ever need something to cheer me up, I read any book in that series!');
} else{
  alert('Actually, my that was the first thing that my dad ever read to me, so if I ever am in a bad mood or need to not think about what I am reading I choose that!');
}
console.log('Asking ' + UserName + ' if they know that I love Nancy Drew!');

//beginning of guessing game
var answer= 450;
var guess= parseInt(prompt('How many books do you think I own?').toLowerCase());

for (var i = 0; i < 3; i++){
  if (guess < 450){
    guess=prompt ('That number was wrong, perhaps you should try something bigger! As Henry Ford says "Failure is only the opportunity to being again, only this time more wisely".');
  }
    else if (guess > 450){
      guess= prompt('That number was wrong, it was a little to high! As Henry Ford says "Failure is only the opportunity to being again, only this time more wisely".');
    }
    else {
      alert('You know how bad my book obesession is!!');
    }
}
 //


