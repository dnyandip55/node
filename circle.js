const PI=3.141592653589793;
function calculateArea(radius){
    return PI*radius*radius;
}

function calculateCircumference(radius){
    return 2*PI*radius;
}

module.exports={calculateArea,calculateCircumference};