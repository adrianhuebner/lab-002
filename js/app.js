//"use strict"

// asking the user for their name prompt
var UserName = prompt('Hi! My name is Adrian! What`s your name?');
alert('Hello ' + UserName + '! It\s nice to meet you! We are going to see how well you know me with a guessing game!');
console.log('Learning the name of ' + UserName + ' who, is going to play a game about me!');

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


// asking the user who caused my love of reading
var dadReads = prompt('Do you think that it was my dad who helped me begin to love to read?')

// creating an if/else statement about my love of reading
if (dadReads.toLowerCase() === 'yes') {
  alert('Yes, my dad made me love to read.');
} else{
  alert('Actually, ' + UserName + ' my dad create my love of reading.');
}
console.log('Asking ' + UserName + ' whether or not it was my dad who made me love to read.');