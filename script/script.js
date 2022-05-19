'use strict';

let num1;
let num2;

let calculator = {
    read() {
        num1 = +prompt('Введите число 1');
        num2 = +prompt('Введите число 2');

        if(typeof num1 !== 'number' && typeof num2 !== 'number'){
            console.log('не чичло')
        }

    },

    sum() {
        console.log(num1 + num2);
    },

    mul() {
        console.log(num1 * num1);
    }


};

console.log(calculator);

calculator.read();
calculator.sum();
calculator.mul();
