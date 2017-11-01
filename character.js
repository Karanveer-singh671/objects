
function countLetterIndice(string) {
  var indicePos = {}; // empty object so far return after
  string = string.split(/\s+/g).join('').toLowerCase();

  for (var i = 0; i <string.length; i++) {
     var character = string.charAt(i); // initializes each letter of string
     var indexed = i;
     if (indicePos[character]) { // if character is inside object increment count of that letter
         indicePos[character].push(i); // push index occurring into array
     }
    else {
      indicePos[character] = [string.indexOf(character)];
// only can push array without brackets it is represented as numbers
    }



   }
return indicePos; // which contains letter and number of occurrences

}

console.log(countLetterIndice('Run away'))

// r: 0
// u: 1
// n: 2
// a: 3,5
// w: 4
