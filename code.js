// helloWorld function 

/* 1. BY CHANGING THE FUNCTION NAME FROM
helloWorld TO hello, THE TESTS.JS ALERTS JASMINE
THAT ITS WRONG THEREFORE RED WILL BE ALERTED
IN THIS CASE, 4 OUT 4 SPECS WERE A FAILURE

2. BY CHANGING THE BODY OF THE FUNCTION FROM
"Hello, World!" TO "Hello", THE TESTS.JS ALERTS
JASMINE WHAT IS WRONG THEREFORE RED WILL BE ALERTED
IN THIS CASE, ONLY 1 OUT 4 SPECS WERE A FAILURE

3. BY CHANGING THE RETURN TO LOG, JASMINE ALERTED
ME THAT 3 OUT 4 SPECS WERE A FAILURE

4. BY CHANGING THE FUNCTION STATEMENT TO A
FUNCTION EXPRESSION OR JUST CHANGING THE SYNTAX
CAN ALSO ALERT JASMINE TO GO GREEN AS LONG AS
THE SYNTAX IS RIGHT!
 */

/* ORIGINAL: FUNCTION STATEMENT SYNTAX
function helloWorld() {
    return "Hello, World!";
}
 */

/*
CREATING A VARIABLE:
var greeting;
function helloWorld() {
     greeting = "Hello, World!";
     return greeting;
}
 */

// FUNCTION EXPRESSION SYNTAX
// USING AN ANONYMOUS FUNCTION TO A VAR
const helloWorld = function() {
    return "Hello, World!";
}

// CODE TEST FOR sayHello() FUNCTION (BEFORE REFACTOR)
/*function sayHello(input) {
    if(input === "Alex") {
        return "Hello, Alex!";
    } else if(input === "Pat") {
        return "Hello, Pat!";
    } else {
        return "Hello, Jane!";
}
}
*/

// AFTER REFACTOR
function sayHello(input) {
    return "Hello, " + input + "!";
}