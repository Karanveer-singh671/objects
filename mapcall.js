
var words = ["ground", "control", "to", "major", "tom"];

// Printing out length of each word:
var wordLength = words.map(function(eachWord) {
 return eachWord.length;
});

// console.log(wordLength);

var upperCaseWords = words.map(function(eachWord) {
 return eachWord.toUpperCase();
});

console.log(upperCaseWords);

var srj = words.map(function(word) {
  return word.split('').reverse().join('');
});
console.log(srj);