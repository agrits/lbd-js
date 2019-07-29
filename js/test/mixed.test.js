/* Write a JavaScript function to extract unique characters from a string. Not viable inputs should return null.
* Example string : "aaabbbcdgggwerty"
* Expected Output : "cdwerty"
*/
function extractUniqueCharacters(testString){
  if(!testString){
    return ""
  }
  testString = testString.toString()

  counts =  Array.from(testString).reduce((a, b) => {
    if(a[b]){
      a[b]++
    }
    else {
      a[b] = 1
    }
    return a;
  }, new Object())
  return Object.keys(counts).filter(a => counts[a]==1).join("")
}

/*
* Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Not viable inputs should return false.
* Example input: 5
* Expected Output : true
*/

  function isNumberPrime(testNumber){
    parsed = parseInt(testNumber)
  if(!Number.isInteger(parsed) || parsed <= 1){
    return false
  }
  for(i = 2; i <= Math.floor(Math.sqrt(parsed)); i++){
    if(parsed%i == 0){
      return false
    }
  }
  return true;
}

/*
* Write a JavaScript function that checks whether a passed string is palindrome or not? Not viable inputs should return false.
* Example input: "kajak"
* Expected Output : true
*/
function isStringPalindrome(testString){
  if(!testString)
    return false;
  testString = testString.toString()
  for(i = 0; i < testString.length; i++){
    if(testString[i] != testString[testString.length-i-1]){
      return false
    }
  }
  return true
}

/*
* Write a JavaScript function that reverse a number. Not viable inputs should return null.
* Example input: 12345
* Expected Output : 54321
*/

//We can achieve this by push pop, but that's funnier way
function getReversedNumber(testNumber){
  parsed = parseInt(testNumber)
  if(!parsed && parsed !== 0)
    return null
  sum = 0
  stack = []
  for(i = 10; i <= parsed*10; i*=10){
    part = ((parsed-sum)%i)/(i/10)
    stack.push(part)
    sum += part*(i/10)
  }
  return parseInt(stack.join(""))
}

/*
* Write a JavaScript function to filter false, null, 0 and blank values from an array. Not viable inputs should return empty array.
* Example input: "[6, '', 'dog', undefined, null, false, 0, 'car']"
* Expected Output : [6, 'dog', 'car']
* */
function filterArray(testArray){
  if(!testArray)
    return []
  return testArray.filter(a => !(!a))
}

/*
* Write a JavaScript function to find the most frequent item of an array. Not viable inputs should return empty array.
* Example input: "[6, ' ', 'dog', undefined, null, false, 0, 'car']"
* Expected Output : [6, 'dog', 'car']
*/
function findMostFrequent(testArray){
  if(!testArray)
    return null

  max_count = 0
  counts = testArray.reduce((a, b) => {
    a[b] ? a[b]++ : a[b] = 1
    return a
  }, new Object)
  Object.keys(counts).forEach(a => {
    if(counts[a] > max_count){
      max_count = counts[a]
    }
  })
  return parseInt(Object.keys(counts).filter(a => counts[a] === max_count).pop())
}

/*
* Write a JavaScript function to find number form fibonacci sequence with provided index.
* Example input: 4
* Expected Output : 3
*/
function getFibonacciNumber(index){
  if((!index || index < 0) && index!==0)
    return null
  if(index === 1)
    return 1
  if(index === 0)
    return 0
  return getFibonacciNumber(index-1)+getFibonacciNumber(index-2)
}

/*
* Write a JavaScript function that takes a string to be encoded and a shift factor and then returns the encoded string.
* the cipher should retain capitalization:
* should not shift punctuation:
* the shift should wrap around the alphabet:
* negative numbers should work as well:
* Example input: 'A', 1
* Expected Output : 'B'
*/
function sign(number){
  if(number > 0)
    return 1
  if(number < 0)
    return -1
  return 0
}
function rot(char, factor){
  alphabetLength = 26
  code = char.charCodeAt(0)
  if((code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0)) || (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0))){
    newCode = code + (alphabetLength - sign(factor)*(factor%alphabetLength))
    return String.fromCharCode(newCode)
  }
  return char
}
function getCaesarCode(message, factor){
  return Array.from(message).reduce((acc, c) => acc+rot(c, factor), "")
}

/*
* Write a JavaScript function that takes 2 integers and returns the sum of every number between(and including) them:
* Example input: 1, 4
* Expected Output : 10 // 1 + 2 + 3 + 4
*/
function sumAll(arg1, arg2){
  if(typeof(arg1)!=="number" || typeof(arg2)!=="number")
    return null
  if(arg2<arg1){
    temp = arg1
    arg1 = arg2
    arg2 = temp
  }

  return (arg2*(arg2+1) - arg1*(arg1-1))/2
}

/*
* Write a JavaScript function that takes 1 string and returns capitalized word:
* Example input: joHN
* Expected Output : John
*/
function capitalize(word){
  if(!word)
    return ""
  return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
  return 'hello world!';
}

var assert = require("assert");

describe('1. extractUniqueCharacters', ()=> {
  it('extractUniqueCharacters should return single character when provided single character', () => {
    var test = extractUniqueCharacters('a');
    var expected = 'a';
    assert(test === expected);
  });
  it('extractUniqueCharacters should return empty string when provided empty string', () => {
    var test = extractUniqueCharacters('');
    var expected = '';
    assert(test === expected);
  });
  it('extractUniqueCharacters should return empty string when provided null', () => {
    var test = extractUniqueCharacters(null);
    var expected = '';
    assert(test === expected);
  });
  it('extractUniqueCharacters should return empty string when provided undefined', () => {
    var test = extractUniqueCharacters(undefined);
    var expected = '';
    assert(test === expected);
  });
  it('extractUniqueCharacters should return same string when provided only unique characters', () => {
    var test = extractUniqueCharacters('abfghjkil');
    var expected = 'abfghjkil';
    assert(test === expected);
  });
  it('extractUniqueCharacters should return string without repeated characters when provided with one', () => {
    var test = extractUniqueCharacters('aaabbcddddeeety');
    var expected = 'cty';
    assert(test === expected);
  });
  it('extractUniqueCharacters should also work when provided numbers', () => {
    var test = extractUniqueCharacters(99987654321);
    var expected = '87654321';
    assert(test === expected);
  });
});

describe('2. isNumberPrime', ()=> {
  it('isNumberPrime should return true when provided number is prime 5', () => {
    var test = isNumberPrime(5);
    var expected = true;
    assert(test === expected);
  });
  it('isNumberPrime should return true when provided number is prime 199', () => {
    var test = isNumberPrime(199);
    var expected = true;
    assert(test === expected);
  });
  it('isNumberPrime should return false when provided number is negative', () => {
    var test = isNumberPrime(-1);
    var expected = false;
    assert(test === expected);
  });
  it('isNumberPrime should return false when provided number is null', () => {
    var test = isNumberPrime(null);
    var expected = false;
    assert(test === expected);
  });
  it('isNumberPrime should return false when provided number is undefined', () => {
    var test = isNumberPrime(undefined);
    var expected = false;
    assert(test === expected);
  });
  it('isNumberPrime should return true when provided number is parseable string', () => {
    var test = isNumberPrime('149');
    var expected = true;
    assert(test === expected);
  });
});

describe('3. isStringPalindrome', ()=> {
  it('isStringPalindrome should return true when provided input is a palindrome kajak', () => {
    var test = isStringPalindrome('kajak');
    var expected = true;
    assert(test === expected);
  });
  it('isStringPalindrome should return true when provided input is a palindrome racecar', () => {
    var test = isStringPalindrome('racecar');
    var expected = true;
    assert(test === expected);
  });
  it('isStringPalindrome should return true when provided input is a palindrome - wasit...', () => {
    var test = isStringPalindrome('wasitacaroracatisaw');
    var expected = true;
    assert(test === expected);
  });
  it('isStringPalindrome should return false when provided input is not a palindrome', () => {
    var test = isStringPalindrome('amanaplan,acanalpanama');
    var expected = false;
    assert(test === expected);
  });
  it('isStringPalindrome should return true when provided number input is a palindrome', () => {
    var test = isStringPalindrome(789987);
    var expected = true;
    assert(test === expected);
  });
  it('isStringPalindrome should return false when provided number input is not a palindrome', () => {
    var test = isStringPalindrome(7899878);
    var expected = false;
    assert(test === expected);
  });
  it('isStringPalindrome should return false when provided input is null', () => {
    var test = isStringPalindrome(null);
    var expected = false;
    assert(test === expected);
  });
  it('isStringPalindrome should return false when provided input is undefined', () => {
    var test = isStringPalindrome(undefined);
    var expected = false;
    assert(test === expected);
  });
});

describe('5. getReversedNumber', ()=> {
  it('getReversedNumber should return reversed number when provided proper long number', () => {
    var test = getReversedNumber(5456);
    var expected = 6545;
    assert(test === expected);
  });
  it('getReversedNumber should return reversed number when provided single digit', () => {
    var test = getReversedNumber(5);
    var expected = 5;
    assert(test === expected);
  });
  it('getReversedNumber should return null when provided with unparseable string', () => {
    var test = getReversedNumber('crocodile');
    var expected = null;
    assert(test === expected);
  });
  it('getReversedNumber should return reversed number when provided with parseable string', () => {
    var test = getReversedNumber('123');
    var expected = 321;
    assert(test === expected);
  });
  it('getReversedNumber should return null when provided with null', () => {
    var test = getReversedNumber(null);
    var expected = null;
    assert(test === expected);
  });
  it('getReversedNumber should return null number when provided with undefined', () => {
    var test = getReversedNumber(undefined);
    var expected = null;
    assert(test === expected);
  });
});

describe('6. filterArray', ()=> {
  it('filterArray should return empty array when provided with null', () => {
    var test = filterArray(null);
    var expected = [];
    assert(test.toString() === expected.toString());
  });
  it('filterArray should return empty array when provided with undefined', () => {
    var test = filterArray(null);
    var expected = [];
    assert(test.toString() === expected.toString());
  });
  it('filterArray should return empty array when provided with empty array', () => {
    var test = filterArray([]);
    var expected = [];
    assert(test.toString() === expected.toString());
  });
  it('filterArray should return filtered array when provided with array [1]', () => {
    var test = filterArray([1]);
    var expected = [1];
    assert(test.toString() === expected.toString());
  });
  it('filterArray should return filtered array when provided with array [1, 0]', () => {
    var test = filterArray([1, 0]);
    var expected = [1];
    assert(test.toString() === expected.toString());
  });
  it('filterArray should return filtered array when provided with array [1, 0, \'\']', () => {
    var test = filterArray([1, 0, '']);
    var expected = [1];
    assert(test.toString() === expected.toString());
  });
  it('filterArray should return filtered array when provided with array [1, 0, false, undefined, null, 2 , 3]', () => {
    var test = filterArray([1, 0, false, undefined, null, 2 , 3]);
    var expected = [1, 2, 3];
    assert(test.toString() === expected.toString());
  });
});

describe('7. findMostFrequent', ()=> {
  it('findMostFrequent should return most frequent element of an array [1, 0]', () => {
    var test = findMostFrequent([1, 0]);
    var expected = 1;
    assert(test === expected);
  });
  it('findMostFrequent should return null when provided with null input', () => {
    var test = findMostFrequent(null);
    var expected = null;
    assert(test === expected);
  });
  it('findMostFrequent should return null when provided with undefined input', () => {
    var test = findMostFrequent(undefined);
    var expected = null;
    assert(test === expected);
  });
  it('findMostFrequent should return most frequent element of an array [1]', () => {
    var test = findMostFrequent([1]);
    var expected = 1;
    assert(test === expected);
  });
  it('findMostFrequent should return most frequent element of an array [1]', () => {
    var test = findMostFrequent([1, 1]);
    var expected = 1;
    assert(test === expected);
  });
  it('findMostFrequent should return most frequent element of an array [1, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 9, 0]', () => {
    var test = findMostFrequent([1, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 9, 0]);
    var expected = 7;
    assert(test === expected);
  });
});

describe('8. getFibonacciNumber', ()=> {
  it('getFibonacciNumber should return null for undefined input', () => {
    var test = getFibonacciNumber(undefined);
    var expected = null;
    assert(test === expected);
  });
  it('getFibonacciNumber should return null for null input', () => {
    var test = getFibonacciNumber(null);
    var expected = null;
    assert(test === expected);
  });
  it('getFibonacciNumber should return null number for negative integers', () => {
    var test = getFibonacciNumber(-1);
    var expected = null;
    assert(test === expected);
  });
  it('getFibonacciNumber should return proper number for index 0', () => {
    var test = getFibonacciNumber(0);
    //corrected from 1 to 0 :)
    var expected = 0;
    assert(test === expected);
  });
  it('getFibonacciNumber should return proper number for index 4', () => {
    var test = getFibonacciNumber(4);
    var expected = 3;
    assert(test === expected);
  });
  it('getFibonacciNumber should return proper number for index 6', () => {
    var test = getFibonacciNumber(6);
    var expected = 8;
    assert(test === expected);
  });
  it('getFibonacciNumber should return proper number for index 10', () => {
    var test = getFibonacciNumber(10);
    var expected = 55;
    assert(test === expected);
  });
  it('getFibonacciNumber should return proper number for index 20', () => {
    var test = getFibonacciNumber(20);
    var expected = 6765;
    assert(test === expected);
  });
});

describe('9. getCaesarCode', ()=> {
  it('getCaesarCode should work with single letters', () => {
    var test = getCaesarCode('A', 1);
    var expected = 'B';
    assert(test === expected);
  });
  it('getCaesarCode should work with words', () => {
    var test = getCaesarCode('A', 1);
    var expected = 'Bbb';
    assert(test === expected);
  });
  it('getCaesarCode should work with phrases', () => {
    var test = getCaesarCode('Hello, World!', 5);
    var expected = 'Mjqqt, Btwqi!';
    assert(test === expected);
  });
  it('getCaesarCode should work with negative shift', () => {
    var test = getCaesarCode('Mjqqt, Btwqi!', -5);
    var expected = 'Hello, World!';
    assert(test === expected);
  });
  it('getCaesarCode should wrap', () => {
    var test = getCaesarCode('Z', 1);
    var expected = 'A';
    assert(test === expected);
  });
  it('getCaesarCode should work with large shift factors', () => {
    var test = getCaesarCode('Hello, World!', 75);
    var expected = 'Ebiil, Tloia!';
    assert(test === expected);
  });
});

describe('10. sumAll', ()=> {
  it('sumAll should sum numbers within the range', () => {
    var test = sumAll(1, 4);
    var expected = 10;
    assert(test === expected);
  });
  it('sumAll should work with large numbers', () => {
    var test = sumAll(1, 4000);
    var expected = 8002000;
    assert(test === expected);
  });
  it('sumAll should work with large numbers first', () => {
    var test = sumAll(123, 1);
    var expected = 7626;
    assert(test === expected);
  });
  it('sumAll return null with non numeric parameters', () => {
    var test = sumAll(10, "90");
    var expected = null;
    assert(test === expected);
  });
  it('sumAll return null with non numeric parameters []', () => {
    var test = sumAll(10, [90, 1]);
    var expected = null;
    assert(test === expected);
  });
});

describe('11. capitlaize', ()=> {
  it('capitalize should return emty string when empty string provided', () => {
    var test = capitalize("");
    var expected = "";
    assert(test === expected);
  });
  it('sumAll should return empty string when null provided', () => {
    var test = capitalize(null);
    var expected = "";
    assert(test === expected);
  });
  it('sumAll should return empty string when undefined provided', () => {
    var test = capitalize(undefined);
    var expected = "";
    assert(test === expected);
  });
  it('sumAll should return capitalized string when lowercase string provided', () => {
    var test = capitalize("john");
    var expected = "John";
    assert(test === expected);
  });
  it('sumAll should return capitalized string when uppercase string provided', () => {
    var test = capitalize("BRAVO");
    var expected = "Bravo";
    assert(test === expected);
  });
  it('sumAll should return capitalized string when random case string provided', () => {
    var test = capitalize("BLaNe");
    var expected = "Blane";
    assert(test === expected);
  });
});
