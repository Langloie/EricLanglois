/* 
1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (param1,param2) => {
    // ADD YOUR CODE HERE
    if(param1<param2){
        return param2;
        console.log(`${param2} is greater than ${param1}`);
    }
    else if(param2<param1){
        return param1;
    }
    else{
        return 'The numbers are the same.'
    }
  };
  
  maxOfTwoNumbers(1,2);

  maxOfThree();
  
  /*
  2. Define a function  maxOfThree  that takes three numbers as arguments and returns the largest of them.
  */
  maxOfThree = (param1,param2,param3) => {
    // ADD YOUR CODE HERE
    if(param1>=param2 && param1>=param3){
        return param1;
    }
    else if(param2>=param3 && param2>=param1){
        return param2;
    }
    else if(param3>=param1 && param3>=param2){
        return param3;
    }
    else{
        return 'something went wrong'
    }
  };
  
  /*
  3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  */
  isCharacterAVowel = (char) => {
    // ADD YOUR CODE HERE
    let vowels = ['a','e','i','o','u','y'];
    for(let i=0;i<vowels.length;i++){
        if(char === vowels[i]){
            return true;
        }
    }
    return false;
  };
  
  /*
  4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
  */
  
  sumArray = (add_array) => {
    // ADD YOUR CODE HERE
   let total = 0;
    for(let i = 0;i<add_array.length;i++){
        total += add_array[i];
    }
    return total;
  };
  

  multiplyArray = (times_array) =>{
    let total = 1;
    for(let i = 0;i<times_array.length;i++){
        total *=times_array[i];
    }
    return total;
  }
  /*
  5.Write a function that returns the number of arguments passed to the function when called.
  */
  
 //... makes the parameter an array that can hold multiple parameters
 paramNumber = (...param) => {
    return param.length;
}

  /*
  6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
  */
  
  reverseString = (forwardString) => {
    // ADD YOUR CODE HERE
    let backwardString = '';
    for(let i = 0;i<forwardString.length;i++){
        backwardString += forwardString[forwardString.length - i-1];
    }
    return backwardString;
  };
  
  /*
  7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
  */
  findLongestWord = (word_array) => {
    // ADD YOUR CODE HERE
    let longestWord = word_array[0];
    for(let i =0;i<word_array.length;i++){
        if(longestWord.length<word_array[i].length){
            longestWord = word_array[i];
        }
    }
    return longestWord.length;
  };
  
  /*
  8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.
  */
  filterLongWords = (all_words,i) => {
    // ADD YOUR CODE HERE
    let filtered_words = [];
    for(let j = 0;j<all_words.length;j++){
        if(all_words[j].length>i){
            filtered_words.push(all_words[j]);
        }
    }
    return filtered_words;
  };
  

  //Bonus 
  //1. Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().


  //this works with "Per Scholas" as an argument, but not as instructed
  const String = {
    reverseString: function(forwardString){
     let backwardString = '';
     for(let i = 0;i<forwardString.length;i++){
       backwardString += forwardString[forwardString.length - i-1];
     }
     return backwardString;
    }
};

//2.Write a function that takes a string as argument and returns an object where:
//          the keys are the characters that occur in the string
//          the values are the number of occurrences for each letter, regardless of the case

//does not work

for(let i = 0;i<str.length;i++){
    filtered = {}
    for(let j = 0;i<alphabet.length;j++){
        if(str[i]===alphabet[j]){
            if(filtered.str[i] === undefined){
                    filtered.str[i] === 1
                            }
        }
    }

}