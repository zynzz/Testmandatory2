const bmiCategory = require('../methods/bmiCategory');

const timeout = 10000;

describe('Bmi categories', () => {

    //Types of categories
    const underWeight = 'Underweight';
    const healthWeight = 'Health weight';
    const overWeight = 'Overweight';
    const obese = 'Obese';

    //Contains all tests
    const tests = [
        {titel:"BMI is less than 18.5", value: 18.49, outcome: underWeight},
        {titel:"BMI is 18.5", value: 18.5, outcome: healthWeight},
        {titel:"BMI is 24.9", value: 24.9, outcome: healthWeight},
        {titel:"BMI is 24.91", value: 24.91, outcome: overWeight},
        {titel:"BMI is 29.9", value: 29.9, outcome: overWeight},
        {titel:"BMI is 29.91 or higher", value: 29.91, outcome: obese},
    ];

    //Tests
    for(let i = 0; i < tests.length; i++){
        it(tests[i].titel, () => {
            expect(bmiCategory(tests[i].value)).toBe(tests[i].outcome);
        }, timeout);
    }
});