var Horseman = require('node-horseman');
const FILE = './calc.html';

var assert = require('assert');

describe('jQuery Calculator', () => {

  it('Correct digit should appear in display when one digit is selected', (done) => { singleDigitAppearsInDisplay(done); });

  it('Correct digits should appear in display when multiple digits are selected', (done) => { multipleDigitsAppearInDisplay(done); });

  it('Correct digit should appear in display when selected following operator', (done) => { singleDigitAppearsInDisplayFollowingOperator(done); });

  it('Correct digits should appear in display when selected following operator', (done) => { multipleDigitsAppearInDisplayFollowingOperator(done); });

  it('Should show correct output after adding two single-digit numbers', (done) => { addTwoSingleDigitNumbers(done); });

  it('Should show correct output after subtracting two single-digit numbers', (done) => { subtractTwoSingleDigitNumbers(done); });

  it('Should show correct output after multiplying two single-digit numbers', (done) => { multiplyTwoSingleDigitNumbers(done); });

  it('Should show correct output after dividing two single-digit numbers', (done) => { divideTwoSingleDigitNumbers(done); });

  it('Should show correct output after adding two multi-digit numbers', (done) => { addTwoMultiDigitNumbers(done); });

  it('Should show correct output after subtracting two multi-digit numbers', (done) => { subtractTwoMultiDigitNumbers(done); });

  it('Should show correct output after multiplying two multi-digit numbers', (done) => { multiplyTwoMultiDigitNumbers(done); });

  it('Should show correct output after dividing two multi-digit numbers', (done) => { divideTwoMultiDigitNumbers(done); });

  it('Should show correct output after pressing add button after previous operation', (done) => { showResultAfterPressingAddButton(done); });

  it('Should show correct output after pressing subtract button after previous operation', (done) => { showResultAfterPressingSubtractButton(done); });

  it('Should show correct output after pressing multiply button after previous operation', (done) => { showResultAfterPressingMultiplyButton(done); });

  it('Should show correct output after pressing divide button after previous operation', (done) => { showResultAfterPressingDivideButton(done); });

  it('Should show correct output after performing two add operations', (done) => { performTwoAddOperations(done); });

  it('Should show correct output after performing two subtract operations', (done) => { performTwoSubtractOperations(done); });

  it('Should show correct output after performing two multiply operations', (done) => { performTwoMultiplyOperations(done); });

  it('Should show correct output after performing two divide operations', (done) => { performTwoDivideOperations(done); });

  it('Should use previous result in new add operation', (done) => { useResultInNewAddOperation(done); });

  it('Should use previous result in new subtract operation', (done) => { useResultInNewSubtractOperation(done); });

  it('Should use previous result in new multiply operation', (done) => { useResultInNewMultiplyOperation(done); });

  it('Should use previous result in new divide operation', (done) => { useResultInNewDivideOperation(done); });

  it('Should display correct output when result of subtraction is negative', (done) => { displayNegativeResultOfSubtraction(done); });

  it('Should display correct result when subtracting from zero', (done) => { subtractFromZero(done); });

  it('Display should be empty after clicking clear after entering number', (done) => { clearAfterEnteringNumber(done); });

  it('Display should be empty after clicking clear after performing operation', (done) => { clearAfterPerformingOperation(done); });

  it('Should ignore equals button when clicked before operator', (done) => { ignoreEqualsButtonBeforeOperator(done); });

  it('Should ignore equals button when clicked after operator', (done) => { ignoreEqualsButtonAfterOperator(done); });

  it('Should ignore first operator after clicking another', (done) => { ignoreFirstOperatorAfterClickingAnother(done); });

  it('Should repeat previous operation with most recently entered operand after clicking equals button again', (done) => { repeatOperationAfterClickingEqualsButtonAgain(done); });


});


function singleDigitAppearsInDisplay(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button1")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 1, 'Incorrect value displayed when user enters single digit');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}



function multipleDigitsAppearInDisplay(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button2")
    .click("#button3")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 23, 'Incorrect value displayed when user enters number consisting of multiple digits');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function singleDigitAppearsInDisplayFollowingOperator(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button1")
    .click("#addButton")
    .click("#button4")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 4, 'Incorrect value displayed when user enters operand, then operator, then single-digit operand');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function multipleDigitsAppearInDisplayFollowingOperator(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button2")
    .click("#subtractButton")
    .click("#button5")
    .click("#button6")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 56, 'Incorrect value displayed when user enters operand, then operator, then operand consisting of multiple digits');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function addTwoSingleDigitNumbers(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button7")
    .click("#addButton")
    .click("#button1")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 8, 'Incorrect value displayed when user attempts to add two single-digit operands');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function subtractTwoSingleDigitNumbers(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button9")
    .click("#subtractButton")
    .click("#button3")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 6, 'Incorrect value displayed when user attempts to subtract two single-digit operands');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function multiplyTwoSingleDigitNumbers(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button4")
    .click("#multiplyButton")
    .click("#button2")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 8, 'Incorrect value displayed when user attempts to multiply two single-digit operands');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function divideTwoSingleDigitNumbers(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button8")
    .click("#divideButton")
    .click("#button4")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 2, 'Incorrect value displayed when user attempts to divide two single-digit operands');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function addTwoMultiDigitNumbers(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button3")
    .click("#button5")
    .click("#addButton")
    .click("#button2")
    .click("#button8")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 35 + 28, 'Incorrect value displayed when user attempts to add two operands that each have multiple digits');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}


function subtractTwoMultiDigitNumbers(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button6")
    .click("#button7")
    .click("#subtractButton")
    .click("#button4")
    .click("#button1")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 67 - 41, 'Incorrect value displayed when user attempts to subtract two operands that each have multiple digits');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function multiplyTwoMultiDigitNumbers(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button1")
    .click("#button9")
    .click("#multiplyButton")
    .click("#button2")
    .click("#button0")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 19 * 20, 'Incorrect value displayed when user attempts to multiply two operands that each have multiple digits');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}


function divideTwoMultiDigitNumbers(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button7")
    .click("#button5")
    .click("#divideButton")
    .click("#button1")
    .click("#button5")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 5, 'Incorrect value displayed when user attempts to divide two operands that each have multiple digits');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function showResultAfterPressingAddButton(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button7")
    .click("#addButton")
    .click("#button3")
    .click("#addButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 10, 'Incorrect value displayed when user enters an operand, an operator, an operand, and then clicks add button');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function showResultAfterPressingSubtractButton(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button9")
    .click("#addButton")
    .click("#button4")
    .click("#subtractButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 13, 'Incorrect value displayed when user enters an operand, an operator, an operand, and then clicks subtract button');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function showResultAfterPressingMultiplyButton(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button8")
    .click("#addButton")
    .click("#button6")
    .click("#multiplyButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 14, 'Incorrect value displayed when user enters an operand, an operator, an operand, and then clicks multiply button');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function showResultAfterPressingDivideButton(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button5")
    .click("#addButton")
    .click("#button1")
    .click("#divideButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 6, 'Incorrect value displayed when user enters an operand, an operator, an operand, and then clicks divide button');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function performTwoAddOperations(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button1")
    .click("#button5")
    .click("#addButton")
    .click("#button3")
    .click("#button2")
    .click("#addButton")
    .click("#button6")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 15 + 32 + 6, 'Incorrect value displayed when user tries to perform two add operations without clicking equals button in between');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}


function performTwoSubtractOperations(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button9")
    .click("#button0")
    .click("#subtractButton")
    .click("#button1")
    .click("#button8")
    .click("#subtractButton")
    .click("#button7")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 90 - 18 - 7, 'Incorrect value displayed when user tries to perform two subtract operations without clicking equals button in between');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}


function performTwoMultiplyOperations(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button5")
    .click("#multiplyButton")
    .click("#button2")
    .click("#button3")
    .click("#multiplyButton")
    .click("#button8")
    .click("#button7")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 5 * 23 * 87, 'Incorrect value displayed when user tries to perform two multiply operations without clicking equals button in between');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function performTwoDivideOperations(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button7")
    .click("#button2")
    .click("#divideButton")
    .click("#button6")
    .click("#divideButton")
    .click("#button4")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 3, 'Incorrect value displayed when user tries to perform two divide operations without clicking equals button in between');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function useResultInNewAddOperation(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button7")
    .click("#addButton")
    .click("#button6")
    .click("#equalsButton")
    .click("#addButton")
    .click("#button5")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 7 + 6 + 5, 'Incorrect value displayed when user performs operation, clicks equals button, then add, then another operator, then equals button again');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}


function useResultInNewSubtractOperation(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button9")
    .click("#addButton")
    .click("#button3")
    .click("#equalsButton")
    .click("#subtractButton")
    .click("#button4")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, (9 + 3) - 4, 'Incorrect value displayed when user performs operation, clicks equals button, then subtract, then another operator, then equals button again');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function useResultInNewMultiplyOperation(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button2")
    .click("#addButton")
    .click("#button1")
    .click("#equalsButton")
    .click("#multiplyButton")
    .click("#button8")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, (2 + 1) * 8, 'Incorrect value displayed when user performs operation, clicks equals button, then multiply, then another operator, then equals button again');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function useResultInNewDivideOperation(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button8")
    .click("#addButton")
    .click("#button6")
    .click("#equalsButton")
    .click("#divideButton")
    .click("#button7")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 2, 'Incorrect value displayed when user performs operation, clicks equals button, then divide, then another operator, then equals button again');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function displayNegativeResultOfSubtraction(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button3")
    .click("#subtractButton")
    .click("#button8")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, -5, 'Incorrect value displayed when result of subtraction is negative');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function subtractFromZero(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button0")
    .click("#subtractButton")
    .click("#button7")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, -7, 'Incorrect value displayed after user enters 0, then subtract, then another operand');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function clearAfterEnteringNumber(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button6")
    .click("#clearButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, '', 'Display should be clear after entering number and then hitting clear button');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function clearAfterPerformingOperation(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button2")
    .click("#addButton")
    .click("#button9")
    .click("#equalsButton")
    .click("#clearButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, '', 'Display should be clear after clicking clear button after performing operation');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function ignoreEqualsButtonBeforeOperator(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button8")
    .click("#equalsButton")
    .click("#addButton")
    .click("#button1")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 9, 'Incorrect value displayed after entering operand, then clicking equals button before operator and second operand');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function ignoreEqualsButtonAfterOperator(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button2")
    .click("#multiplyButton")
    .click("#equalsButton")
    .click("#button6")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 12, 'Incorrect value displayed after choosing an operator and then clicking equals button before entering second operand');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}


function ignoreFirstOperatorAfterClickingAnother(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button3")
    .click("#subtractButton")
    .click("#multiplyButton")
    .click("#button7")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 21, 'Incorrect value displayed after choosing one operator then another before entering second operand');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}

function repeatOperationAfterClickingEqualsButtonAgain(done) {
  var horseman = new Horseman();
  horseman
    .open(FILE)
    .click("#button3")
    .click("#addButton")
    .click("#button5")
    .click("#equalsButton")
    .click("#equalsButton")
    .value("#display")
    .then(function (value) {
      assert.equal(value, 13, 'Incorrect value displayed after performing operation and hitting equals button twice');
    })
    .then( () => { horseman.close(); })
    .then(done, done);
}