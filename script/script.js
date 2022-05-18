'use strict';

// let num1;
// let num2;


let calculator = {
    num1: 0,
    num2: 0,

    read: function () {
        this.num1 = +prompt('Введите число 1');
        this.num2 = +prompt('Введите число 2');

        if( typeof this.num1 !== 'number' ){
            this.num1 = 0;
        }else if(typeof this.num2 !== 'number'){
            this.num2 = 0;
        }

    },

    sum: function () {
        console.log(this.num1 + this.num2);
    },

    mul: function () {
        console.log(this.num1 * this.num1);
    }


};

console.log(calculator);

calculator.read();
calculator.sum();
calculator.mul();

// console.log(calculator.sum(num1, num2));
// console.log(calculator.mul(num1, num2));