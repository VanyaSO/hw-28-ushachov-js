'use strict';



let calculator = {
    read() {
        this.num1 = +prompt('Введите число 1',0);
        this.num2 = +prompt('Введите число 2',0);
    },

    sum() {
        console.log(this.num1 + this.num2);
    },

    mul() {
        console.log(this.num1 * this.num1);
    }


};

console.log(calculator);

calculator.read();
calculator.sum();
calculator.mul();
