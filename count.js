
function countLetters(string) {
  var freqCounter = {}; // empty object so far return after
  string = string.split(/\s+/g).join('').toLowerCase();

  for (var i = 0; i <string.length; i++) {
     var character = string.charAt(i); // initializes each letter of string
     if (freqCounter[character]) { // if character is inside object increment count of that letter
       freqCounter[character]++;
     }
     else {
      freqCounter[character] = 1; // o.w first occurence of that word in object
     }



   }
return freqCounter; // which contains letter and number of occurrences

}


console.log(countLetters("Lighthouse in the house"));