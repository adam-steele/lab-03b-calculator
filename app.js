// addtion logic

const addButt = document.getElementById('add-butt');

addButt.addEventListener('click', () => {
    const inOne = document.getElementById('in-one');
    const inTwo = document.getElementById('in-two');
    const result = document.getElementById('result');

    const firstValue = Number(inOne.value);
    const secondValue = Number(inTwo.value);
    const sum = firstValue + secondValue;

    result.textContent = 'Answer = ' + sum;


});

// minus logic
const minusButt = document.getElementById('minus-butt');

minusButt.addEventListener('click', () => {
    const inThree = document.getElementById('in-three');
    const inFour = document.getElementById('in-four');
    const resultMinus = document.getElementById('result-minus');

    const firstValue = Number(inThree.value);
    const secondValue = Number(inFour.value);
    const subtract = firstValue - secondValue;

    resultMinus.textContent = 'Answer = ' + subtract;


});

// multiplication logic
const multButt = document.getElementById('mult-butt');


multButt.addEventListener('click', () => {
    const inFive = document.getElementById('in-five');
    const inSix = document.getElementById('in-six');
    const resultMult = document.getElementById('result-mult');

    const firstValue = Number(inFive.value);
    const secondValue = Number(inSix.value);
    const multiply = firstValue * secondValue;

    resultMult.textContent = 'Answer = ' + multiply;


});

// division logic
const divButt = document.getElementById('division-butt');


divButt.addEventListener('click', () => {
    const inSeven = document.getElementById('in-seven');
    const inEight = document.getElementById('in-eight');
    const resultDiv = document.getElementById('result-division');

    const firstValue = Number(inSeven.value);
    const secondValue = Number(inEight.value);
    const division = firstValue / secondValue;

    resultDiv.textContent = 'Answer = ' + division;


});