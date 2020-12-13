/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversed = x.toString().split('').reverse().join('');
    return reversed == x ? true : false;
};

isPalindrome(121) //true
isPalindrome(-121) //false
isPalindrome(10) //false
isPalindrome(101) //true