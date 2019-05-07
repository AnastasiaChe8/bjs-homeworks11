

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    "use strict";
    let x;
    let x_2;
    let d = b * b - 4 * a * c;
    if (d < 0) {
        console.log ("Уравнение не имеет корней");
    }
    else if (d == 0) {
        x= -b / (2*a);
        console.log ("Уравнение имеет один корень = " + x);
    }
    else {
        let k = Math.sqrt(d)
        x = (-b + k)/2;
        x_2 = (-b - k)/2;
        console.log ("Уравнение имеет два корня: X максимальное = " + x + " X минимальное = " + x_2);
    }
return [x, x_2];
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
}

getResult(2,8,2);