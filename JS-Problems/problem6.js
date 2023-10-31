// Problem: check if two strings are equuivalent

// const word1 = ["a", "cb"];   ==> "acb"
// const word2 = ["ab", "c"];   ==> "abc"
// arrayStringsAreEqual(word1, word2); // Output: false 

const arrayStringsAreEqual = (word1, word2) => {
    return word1.join("") === word2.join("") ? true: false

}

const word1 = ["a", "cb"];   
const word2 = ["ab", "c"];  
const data = arrayStringsAreEqual(word1, word2)
console.log(data)
