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