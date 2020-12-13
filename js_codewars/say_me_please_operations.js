/*
You have a string of numbers; starting with the third number each number is the result of an operation performed using the previous two numbers.

Complete the function which returns a string of the operations in order and separated by a comma and a space, e.g. "subtraction, subtraction, addition"

The available operations are (in this order of preference):

1) addition
2) subtraction
3) multiplication
4) division

Notes:

    All input data is valid
    The number of numbers in the input string >= 3
    For a case like "2 2 4" - when multiple variants are possible - choose the first possible operation from the list (in this case "addition")
    Integer division should be used

Example

"9 4 5 20 25"  -->  "subtraction, multiplication, addition"

Because:

9 - 4 = 5   --> subtraction
4 * 5 = 20  --> multiplication
5 + 20 = 25 --> addition

*/

function sayMeOperations(str) {
    let strArr = str.split(" ").map(x => parseInt(x));

    let result = [];

    for(let i = 2; i < strArr.length; i++) {  
        switch(true) {
            case (strArr[i] == strArr[i-2] + strArr[i-1]):
                result.push("addition");
                break;
            case (strArr[i] == strArr[i-2] - strArr[i-1]):
                result.push("subtraction");
                break;
            case (strArr[i] == strArr[i-2] * strArr[i-1]):
                result.push("multiplication")
                break;
            default:
                result.push("division");
        }
    }
    return result.join(", ");
  }


sayMeOperations("1 2 3 5 8"); // "addition, addition, addition";
//sayMeOperations("9 4 5 20 25"); // "subtraction, multiplication, addition";
sayMeOperations("10 2 5 -3 -15 12"); // "division, subtraction, multiplication, subtraction";
//sayMeOperations("2 2 4") // "addition";