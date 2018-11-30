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
        {titel:"BMI is less than 18.5", value: 18.4, outcome: underWeight},
        {titel:"BMI is 18.5", value: 18.5, outcome: healthWeight},
        {titel:"BMI is 24.9", value: 24.9, outcome: healthWeight},
        {titel:"BMI is 25", value: 25, outcome: overWeight},
        {titel:"BMI is 29.9", value: 29.9, outcome: overWeight},
        {titel:"BMI is 30 or higher", value: 30, outcome: obese},
    ];

    //Tests
    for(test of tests){
        it(test.titel, () => {
            expect(bmiCategory(test.value)).toBe(test.outcome);
        }, timeout);
    }
});