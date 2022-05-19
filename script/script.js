'use strict';

let num1 = 0;
let num2 = 0;

let calculator = {
    read() {
        num1 = +prompt('Введите число 1');
        num2 = +prompt('Введите число 2');

        if( isNaN(Number( num1)) && isNaN(Number( num2)) ){
            console.log('не чичло');
        }

    },

    sum() {
        console.log(num1 + num2);
    },

    mul() {
        console.log(num1 * num2);
    }


};

console.log(calculator);

calculator.read();
calculator.sum();
calculator.mul();
