const repeatString = function(word, repeatingNumber) {

    if (repeatingNumber < 0)
    {
        return "ERROR";
    }

    let result = "";

    for (let i = 0; i < repeatingNumber; i++)
    {
        result += word;    
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
