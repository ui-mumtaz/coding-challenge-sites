/*
Given a string str, reverse it omitting all non-alphabetic characters.

Example:

Input/Output

    [input] string str

    A string consists of lowercase latin letters, digits and symbols.

    [output] a string
*/

function reverseLetter(str) {
  let regex = /[a-z]/g;
  return str.match(regex).reverse().join("");
}

reverseLetter("krishan") // the output should be "nahsirk".
reverseLetter("ultr53o?n") // the output should be "nortlu".