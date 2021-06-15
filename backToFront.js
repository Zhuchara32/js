let number = prompt(`Введите 3х значное число`, "");
let a = number % 10;
let b = number % 100 - a;
let c = number % 1000 - a - b;
let d = a * 100 + b + c / 100;
alert(`Ваше число задо на перед ${d}`);