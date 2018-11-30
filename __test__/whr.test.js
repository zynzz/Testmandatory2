const whr = require('../methods/whr');

const timeout = 10000;

describe('Waist-to-hip categories', () => {

    const normalWeight = 'Normal weight';
    const overWeight = 'Overweight';
    const obesity = 'Obesity';
    const error = 'Error';

    //Tests that are the same for male and female
    const generalTests = [
        {titel: 'Waist is not a number', waist: 'a', hip:110, outcome: error},
        {titel: 'Hip is not a number', waist: 110, hip:'a', outcome: error},
        {titel: 'Hip is 0', waist: 110, hip:0, outcome: error}
        ];

    //Tests
    let tests = [
        {gender: 'Male', subtests: [
                {titel: 'WHR is less than 0.90', waist: 97.9, hip:110, outcome: normalWeight},
                {titel: 'WHR is 0.90', waist: 99, hip:110, outcome: overWeight},
                {titel: 'WHR is 0.99', waist: 108.9, hip:110, outcome: overWeight},
                {titel: 'WHR is greater than 1', waist: 110, hip:110, outcome: obesity}
        ]},
        {gender: 'Female', subtests: [
                {titel: 'WHR is less than 0.80', waist: 86.9, hip:110, outcome: normalWeight},
                {titel: 'WHR is 0.80', waist: 88, hip:110, outcome: overWeight},
                {titel: 'WHR is 0.84', waist: 92.4, hip:110, outcome: overWeight},
                {titel: 'WHR is greater than 0.85', waist: 93.5, hip:110, outcome: obesity},
        ]}];

    for(test of tests){
        test.subtests.push(...generalTests);
        describe('WHR tests for ' + test.gender, () => {
            for(subtest of test.subtests){
                it(subtest.titel, () => {
                    expect(whr(test.gender, subtest.waist, subtest.hip)).toBe(subtest.outcome);
                }, timeout);
            }
        });
    }
});