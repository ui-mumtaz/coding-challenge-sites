/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
*/

function digital_root(n) {

    if (n.toString().length === 1) {
        return n;
    }
    else {
        let digits = Array.from(n.toString()).map(Number);
        return digital_root(digits.reduce((a, b) => a + b, 0)); 
    }
}

digital_root(16) // should equal 7 
digital_root(456) // should equal 6