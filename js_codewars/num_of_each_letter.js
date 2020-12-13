/*
Interview Question (easy...)

You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using an asterisk (*).

As you can see, the letter c is shown only once, but wih 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

Note that the return string must list the letters in order of their first appearence in the original string.

*/

function getStrings(city){
    const regex = /[a-z]/gi;
    let regCity = city.toLowerCase().match(regex);
    console.log(regCity);

    var finalCount = {};
    for (let i = 0; i < regCity.length; i++) {
        let tally = regCity[i];
        counts[tally] = counts[tally] ? counts[tally] + 1 : 1;
    }

  //return
}

getStrings("Chicago") //should return "c:**,h:*,i:*,a:*,g:*,o:*"
getStrings("Bangkok") //should return "b:*,a:*,n:*,g:*,k:**,o:*"
getStrings("Las Vegas") //should return "l:*,a:**,s:**,v:*,e:*,g:*"
