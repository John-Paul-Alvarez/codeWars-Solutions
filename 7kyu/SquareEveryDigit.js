/*
Square Every Digit
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

*/

function squareDigits(num){
    /*
    convert num to string
    split() 
    iterate in each number and parseInt each number and multiply each to **2
    tostring the result and insert it to the string
    */
   
   let retVal= ""
    let arrStrNum=num.toString().split("")

    for(let i of arrStrNum){
      retVal += parseInt(i**2).toString()
    }
    
    return parseInt(retVal);
  }

console.log(squareDigits(9119)); // expected: 811181
console.log(squareDigits(765));  // expected: 493625
console.log(squareDigits(0));    // expected: 0
console.log(squareDigits(1));    // expected: 1
console.log(squareDigits(1234)); // expected: 14916
