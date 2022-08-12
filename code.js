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

// AFTER REFACTOR FOR sayHello()
function sayHello(input) {
    if(input) {
        return "Hello, " + input + "!";
    } else {
    return "Hello, World!"
    }
}

// CODE TEST FOR isFive() FUNCTION (BEFORE REFACTOR)
/*function isFive(i) {
    var i;
    if(typeof i === "number") {
        return true;
    } else {
        return false;
    }
}

 */

// AFTER REFACTOR FOR isFive()
function isFive(five) {
    return (five === 5);
}

// CODE TEST FOR isEven() FUNCTION (BEFORE REFACTOR)
/*function isEven(num) {
    if(num === 2) {
        return true;
    } else if(num === -4) {
        return true;
    } else if(num === 8) {
        return true;
    } else {
        return false;
    }
}
 */

// AFTER REFACTOR FOR isEven()
function isEven(num) {
    return parseInt(num) % 2 === 0;
}

// CODE TEST FOR isVowel() FUNCTION (BEFORE REFACTOR)
/*function isVowel(char) {
    if(char === "a" || char === "A") {
        return true;
    } else {
        return false;
    }
}
 */

// AFTER REFACTOR FOR isVowel()
function isVowel(char) {
    return (("aeiouAEIOU".indexOf(char) >= 0));
}

// CODE TEST FOR add() FUNCTION (BEFORE REFACTOR)
function add(x, y) {
    return parseInt(x) + parseInt(y);
}
//NO REFACTOR NEEDED; FEELS SHORT AND SIMPLE :)
