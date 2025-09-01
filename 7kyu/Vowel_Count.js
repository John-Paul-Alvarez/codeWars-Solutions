/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
    // a, e, i, o, u
    const vowel = {
        'a': a,
        'e':e,
        'i':i,
        'o':o,
        'u':u
    }
    let count = 0
    for(let key of str){
        if(key in str){
            count += 1
        }
    }


  return count;
}


// Basic tests
console.log(getCount("hello") === 2);   // "e", "o"
console.log(getCount("world") === 1);   // "o"
console.log(getCount("bcdfg") === 0);   // no vowels
console.log(getCount("a") === 1);       // single vowel
console.log(getCount(" ") === 0);       // space only

// Edge cases
console.log(getCount("") === 0);                       // empty string
console.log(getCount("aeiou") === 5);                  // all vowels
console.log(getCount("the quick brown fox") === 5);    // mixed sentence
console.log(getCount("why") === 0);                    // "y" is not a vowel
console.log(getCount("aaa eee iii ooo uuu") === 15);   // repeated vowels
