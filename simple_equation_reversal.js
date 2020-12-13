/*
Given a mathematical equation that has *,+,-,/, reverse it as follows:

solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"
*/

function solve(eq){

    let alphaNumRegex = /(\*|\-|\+|\/)|[a-z][0-9]/i;
    let reversedEquation = eq.split(alphaNumRegex).reverse().join("");

    return reversedEquation;
}

solve("100*b/y")

/*
describe("Basic tests", function(){
Test.assertEquals(solve("100*b/y"),"y/b*100");
Test.assertEquals(solve("a+b-c/d*30"),"30*d/c-b+a");
Test.assertEquals(solve("a*b/c+50"),"50+c/b*a");
});
*/
