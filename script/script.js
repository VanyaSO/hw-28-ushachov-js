'use strict';

let num1;
let num2;


let calculator = {
    read: function read () {
        num1 = +prompt('Введите число 1');
        num2 = +prompt('Введите число 2');

        if( typeof num1 !== 'number' ){
            num1 = 0;
        }else if(typeof num2 !== 'number'){
            num2 = 0;
        }

        return{
            num1,
            num2
        }
    },

    sum: function (num1, num2) {
        return num1 + num2;
    },

    mul: function mul (num1, num2) {
        return num1 * num2;
    }


};

console.log(calculator.read());
console.log(calculator.sum(num1, num2));
console.log(calculator.mul(num1, num2));