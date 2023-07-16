'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    const arr = str.split(' ') // convert to array
    let middle = Math.floor(arr.length / 2) //index of middle word
    const wordLength = arr[middle].length 
    return wordLength 

}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    return str1.split("").sort().join() === str2.split("").sort().join() &&str1.length===str2.length ; 
    //split to split into array then sort alphapatically then joined 
    

   
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= int) {
          return i;
        }
        }  
        return arr.length; 
      // if  no element fulfill condition, return length of array like >>int 7
    };


// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };