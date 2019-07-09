// if (some condition is met){
//   then do something
// } else  {
//   do something else
// }

var likesToRead = prompt('Do you like to Read?');
likesToRead = likesToRead.toLowerCase();

if(likesToRead === 'yes' || likesToRead === 'sure') {
  alert('I love to read as well!');
} else {
  alert('Why not?!');
}