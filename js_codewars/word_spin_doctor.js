/*
Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(spun){

  let newSpin = spun.split(" ");

  for ( let i = 0; i < newSpin.length; i++) {
    if (newSpin[i].length >= 5) {
      newSpin[i] = newSpin[i].split("").reverse().join("");
    }
  }
  newSpin = newSpin.join(" ");
  //console.log(newSpin);
  return newSpin
}

//spinWords("Welcome"); // should return "emocleW";
spinWords("Hey fellow warriors"); // should return "Hey wollef sroirraw";
//spinWords("This is a test"); // should return "This is a test";
//spinWords("This is another test"); // should return "This is rehtona test";
//spinWords("You are almost to the last test"); // should return "You are tsomla to the last test";
spinWords("Just kidding there is still one more"); // should return "Just gniddik ereht is llits one more";
//spinWords("Seriously this is the last one"); // should return "ylsuoireS this is the last one";
