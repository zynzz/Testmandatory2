module.exports = function(gender, waist, hip) {
    const normalWeight = 'Normal weight';
    const overWeight = 'Overweight';
    const obesity = 'Obesity';
    const error = 'Error';

    let whrCategory = error;

    if (!isNaN(waist) && !isNaN(hip) && hip > 0 && waist > 0 ) {

        let whr = waist / hip;
        whr = whr.toFixed(2);

    if (gender == 'Male') {
        //Male
        if (whr < 0.90) {
            whrCategory = normalWeight;
        } else if (whr >= 0.90 && whr <= 0.99) {
            whrCategory = overWeight;
        } else if (whr > 0.99) {
            whrCategory = obesity;
        }
    } else if (gender == 'Female') {
        //Female
        if (whr < 0.80) {
            whrCategory = normalWeight;
        } else if (whr >= 0.80 && whr <= 0.84) {
            whrCategory = overWeight;
        } else if (whr > 0.84) {
            whrCategory = obesity;
        }
    } else {
        whrCategory = error;
    }
}else
{
    whrCategory = error;
}
return whrCategory;
}