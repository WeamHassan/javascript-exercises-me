const reverseString = function(wordToBeReversed) {
    let wordToBeReversedArray;
    let reversedWord = "";
    wordToBeReversedArray = wordToBeReversed.split("");
    
    for(let i = wordToBeReversedArray.length - 1; i >= 0; i--)
    {
        reversedWord += wordToBeReversedArray[i];
    }

    console.log(reversedWord);
    
};

// Do not edit below this line
module.exports = reverseString;
