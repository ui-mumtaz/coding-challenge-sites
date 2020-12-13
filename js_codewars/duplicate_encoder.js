/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word){
    let charArr =  word.toLowerCase().split("");
    //console.log(charArr);

    let charCount = {};
    for (let letter of charArr) {
        //console.log(letter);
        charCount[letter] = (charCount[letter] || 0) + 1;
    } 
    console.log(charCount);

    //let count = (word.match(/./gi) || []).length;
    //console.log(count);
    //let regex = /s{2,}/gi;
    //let newWord = word.replace(regex, "(");
    //console.log(newWord);

}
    //console.log(duplicateEncode("Success"));


//duplicateEncode("din"); // should return "(((";
//duplicateEncode("recede"); // should return "()()()";
duplicateEncode("Success"); // should return ")())())","should ignore case");
//duplicateEncode("(( @"); // should return "))((";

