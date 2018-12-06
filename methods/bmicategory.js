module.exports = function(bmi){
    let bmiCategory = 'Error';
    if(bmi < 18.5){
        bmiCategory = 'Underweight';
    }else if(bmi >= 18.5  &&  bmi <= 24.9){
        bmiCategory = 'Health weight';
    }else if(bmi > 24.9 && bmi <= 29.9){
        bmiCategory = 'Overweight';
    }else if(bmi > 29.9){
        bmiCategory = 'Obese';
    }
    return bmiCategory;
}