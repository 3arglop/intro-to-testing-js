// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//UNIT TESTS FOR sayHello() FUNCTION
/* TODO: testing a sayHello() function that takes in a name as
    an argument and returns a string that says hello to that name.
 */
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    })
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    })
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    })
});

//UNIT TEST FOR isFive() FUNCTION
/*TODO: Ensure that isFive returns a boolean no matter what the input;
    ensure that isFive returns true when passed 5;
    what about if we pass in the string "5"?
    Do you want isFive to return true for that?
    If so, write the test, ensure that the test is failing,
    and then write the implementation
*/
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isFive(true)).toBe('boolean');
        expect(typeof isFive("five")).toBe('boolean');
        expect(typeof isFive(5)).toBe('boolean');
    });
    it('should return true when passed the number 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return false for the string number "5"', function() {
        expect(isFive("5")).toBe(false);
    });
    })

//UNIT TEST FOR isEven() FUNCTION
/*TODO: returns a boolean no matter the input
    returns true when executed with isEven(2)
    returns true when executed with isEven(-4)
    returns false when executed with isEven(3)
    returns false when called with isEven("banana")
    returns true when called with isEven("8")
    returns false when called with isEven(Infinity)
    return false when called with a boolean input like isEven(true) or isEven(false)
    returns false when called without an argument like isEven()
 */
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isEven(2)).toBe('boolean');
        expect(typeof isEven(-2)).toBe('boolean');
        expect(typeof isEven("2")).toBe('boolean');
    });
    it('should return true when passed the number 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed the number -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed the number 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed the number -11', function() {
        expect(isEven(-11)).toBe(false);
    });
    it('should return false when string "banana" is passed', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed the number 8', function() {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when Infinity is passed', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when a boolean is passed as an argument', function() {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it('should return false without an argument', function() {
        expect(isEven()).toBe(false);
    })
});

//UNIT TEST FOR isVowel() FUNCTION
/*TODO: isVowel always returns a boolean
    isVowel("a") returns true
    isVowel("A") returns true
    isVowel("y") returns false
    isVowel(4) returns false
    isVowel(true) or isVowel(false) both return false
    isVowel("banana") returns false
    isVowel() returns false
 */
describe('isVowel', function() {
    it('should return a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isVowel('hello')).toBe('boolean');
        expect(typeof isVowel(true)).toBe('boolean');
        expect(typeof isVowel(123)).toBe('boolean');
    });
    it('should return true when string "a" is passed', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when string "A" is passed', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when string "y" is passed', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when number 4 is passed', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when a boolean is passed as an argument', function() {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when string "banana" is passed', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when no argument is passed', function() {
        expect(isVowel()).toBe(false);
    });
});

//UNIT TEST FOR add() FUNCTION
/*TODO: The add function should sum two numbers,
    as long as each input is a number or a string
    containing a number!
    add(2, 3) returns 5
    add(-3, -9) returns -12
    add("5", 6) returns 11
    add("-4", "10") returns 6
    add("banana", "split") returns NaN
    add(2, "apples") returns NaN
    add() returns NaN
 */
describe('add', function() {
    it('should return a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return the sum of numbers 2 and 3', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return the sum of numbers -3 and -9', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return the sum of string "5" and number 6', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return the sum of strings "-4" and "10"', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when strings "banana" and "split" are passed', function () {
        expect(add("banana", "split")).toBeNaN(true);
    });
    it('should return NaN when number 2 and string "apples" are passed', function () {
        expect(add(2, "apples")).toBeNaN(true);
    });
    it('should return NaN when no argument is passed', function() {
        expect(add()).toBeNaN(true);
    });
});