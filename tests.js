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