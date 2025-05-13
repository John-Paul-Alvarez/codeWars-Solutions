/**
 * Description:

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)


 */

function isIsogram(str){
    /**
     * make all character not capital
     * store each element in object
     * iterate to see if there is one that is the same
     */

    let obj = new Object();
    let arrStr = str.toLowerCase().split("")

    for(let i in arrStr){
                if(obj.hasOwnProperty(arrStr[i])){
            return false
        }
        obj[arrStr[i]] = arrStr[i]
    }
    return true
  }

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("aba"));             // false
console.log(isIsogram("moOse"));           // false
console.log(isIsogram(""));                // true (empty string)
