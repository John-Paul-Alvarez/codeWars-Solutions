package com.example.codewarskotlin

/*
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
* */

fun main() {
    println(findMissingLetter(charArrayOf('a','b','c','d','f'))) // expected: e
    println(findMissingLetter(charArrayOf('O','Q','R','S')))     // expected: P
    println(findMissingLetter(charArrayOf('g','h','j','k')))     // expected: i
    println(findMissingLetter(charArrayOf('R','S','U')))         // expected: T
    println(findMissingLetter(charArrayOf('a','c')))             // expected: b
    println(findMissingLetter(charArrayOf('x','z')))             // expected: y
}



fun findMissingLetter(array: CharArray): Char {
    /*
    get lower and upper bound ascii code number so convert it using .code
    get the size
    loop through the array
    convert char in the array
     compare the converted char ascii code number to the index number of the loop
     if not matched then we found the missing char.
     save that to index number to retval
     convert retval(.tochar) and return

    * */

    var lowerbound : Int = array[0].code
    var upperbound : Int = array[array.lastIndex].code
    var size = array.size
    var index = 0
    var retVal : Int = -1

    for(i in lowerbound .. upperbound){
/*        println(i)
        println(array[index].code)*/
        if(array[index].code != i){
            retVal = i
            break
        }
        index += 1
    }


    return retVal.toChar()
}