// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { addition, subtraction, multiply, divide } from '../maths-functions.js';

const test = QUnit.test;

//addition tests

test('testng if addition 3 + 4 = 7', function(assert) {
        //Arrange
        // Set up your arguments and expectations
    const inOne = 3;
    const inTwo = 4;
    const result = 7;
    
        //Act 
        // Call the function you're testing and set the result to a const
    const actualResult = addition(inOne, inTwo);
    
        //Expectation
        // Make expectations about what is expected and the actual result
    assert.equal(actualResult, result);

});

test('testing addtion for 0 + 10 = 10', function(assert) {
    //Arrange
    // Set up your arguments and expectations
    const inOne = 0;
    const inTwo = 10;
    const result = 10;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = addition(inOne, inTwo);

    //Expectation
    // Make expectations about what is expected and the actual result
    assert.equal(actualResult, result);

});



test('testing addtion for -5 + 7 = 2', function(assert) {
    //Arrange
    // Set up your arguments and expectations
    const inOne = -5;
    const inTwo = 7;
    const result = 2;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = addition(inOne, inTwo);

    //Expectation
    // Make expectations about what is expected and the actual result
    assert.equal(actualResult, result);

});






// subtraction tests



test('testing subtraction for 0 - 10 = -10', function(assert) {
    //Arrange
    // Set up your arguments and expectations
    const inThree = 0;
    const inFour = 10;
    const resultMinus = -10;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = subtraction(inThree, inFour);

    //Expectation
    // Make expectations about what is expected and the actual result
    assert.equal(actualResult, resultMinus);

});

test('testing subtraction for 10 - 10 = 0', function(assert) {
    //Arrange
    // Set up your arguments and expectations
    const inThree = 10;
    const inFour = 10;
    const resultMinus = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = subtraction(inThree, inFour);

    //Expectation
    // Make expectations about what is expected and the actual result
    assert.equal(actualResult, resultMinus);

});

test('testing subtraction for 12 - 10 = 2', function(assert) {
    //Arrange
    // Set up your arguments and expectations
    const inThree = 12;
    const inFour = 10;
    const resultMinus = 2;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = subtraction(inThree, inFour);

    //Expectation
    // Make expectations about what is expected and the actual result
    assert.equal(actualResult, resultMinus);

});









//multiplication tests



test('testing multiply for 5 * 10 = 50', function(assert) {
    //Arrange
    // Set up your arguments and expectations
    const inFive = 5;
    const inSix = 10;
    const resultMultiply = 50;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = multiply(inFive, inSix);

    //Expectation
    // Make expectations about what is expected and the actual result
    assert.equal(actualResult, resultMultiply);

});

test('testing multiply for 200 * 10 = 2000', function(assert) {
    //Arrange
    // Set up your arguments and expectations
    const inFive = 200;
    const inSix = 10;
    const resultMultiply = 2000;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = multiply(inFive, inSix);

    //Expectation
    // Make expectations about what is expected and the actual result
    assert.equal(actualResult, resultMultiply);

});

test('testing multiply for -10 * 10 = 2000', function(assert) {
    //Arrange
    // Set up your arguments and expectations
    const inFive = -10;
    const inSix = 10;
    const resultMultiply = -100;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = multiply(inFive, inSix);

    //Expectation
    // Make expectations about what is expected and the actual result
    assert.equal(actualResult, resultMultiply);

});




//division tests


test('testing divide for 5000 / 10 = 500', function(assert) {
    //Arrange
    // Set up your arguments and expectations
    const inSeven = 5000;
    const inEight = 10;
    const resultDivide = 500;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = divide(inSeven, inEight);

    //Expectation
    // Make expectations about what is expected and the actual result
    assert.equal(actualResult, resultDivide);

});

test('testing divide for 10 / 10 = 0', function(assert) {
    //Arrange
    // Set up your arguments and expectations
    const inSeven = 10;
    const inEight = 10;
    const resultDivide = 1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = divide(inSeven, inEight);

    //Expectation
    // Make expectations about what is expected and the actual result
    assert.equal(actualResult, resultDivide);

});

test('testing divide for -5 / 15 = ', function(assert) {
    //Arrange
    // Set up your arguments and expectations
    const inSeven = -10;
    const inEight = 10;
    const resultDivide = -1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = divide(inSeven, inEight);

    //Expectation
    // Make expectations about what is expected and the actual result
    assert.equal(actualResult, resultDivide);

});