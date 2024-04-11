// console.log(typeoff) //отвечает за понятие що це строка или номер

// let _num1, $num2, num3

// camelCase
// snack_case

// console.log();
// let age = prompt('enter your age');

// console.log(age);

// console.log(typeof(age));//string
// console.log(typeof(Infinity));//number

// number
// number
// 10, 12.45, -10
// Infinity, -Infinity, NaN(not a number)
// console.log(10/0);//Infinity
// console.log(-10/0);//-Infinity
// console.log('John'/2);//NaN
// console.log('John'*2);//NaN
// console.log(Number('John'));//NaN
// console.log(typeof(NaN));//number

// // string
// "string", 'string', `string`
// console.log('2' + 2);//'22'
// console.log('2' + '2' - '2');//'22' - '2' //20 система понимает как математическое решения, только когда + система их склеевает в других показывает сумму

// let num1 = +prompt('enter the number');//неявный метод
// let num2 = Number(prompt('enter the number'));//явный метод

// let user_age = +prompt('enter your age');
// 

// 30 Доступ получен
// 18 Доступ закрыт
// 16 Доступ закрыт
// -18 Доступ закрыт
// #18 Ошибка
// 0.18, 1.3 Доступ закрыт
// if(user_age>18){
//     console.log('Доступ получен');
// }
// else if(user_age<=18){
//     console.log('Доступ закрыт');
// }
// else{
//     console.log('Ошибка');
// }

// Задание. Составьте программу, которая присваивает переменной d значение 7,
//  а затем выводит в консоль: в первой строке - это значение, 
//  во второй – квадрат этого значения, в третьей – куб этого значения. 
//  Программа должна выводить в консоль новое значение.

//  let d =7;
//  console.log(d);
//  console.log( d** 2);
//  console.log(d ** 3);

// Задание : Написать программу, которая считывает два числа (объявляем две переменные и записываем 
//туда результат работы двух вызовов prompt) и выводит их разницу, сумму и произведение 
// (“Разность чисел a и b равна sub, сумма чисел a и b равна sum, произведение чисел a и b равно mult”

// let a = +prompt ( 'ввидите число')
// let b = +prompt ('ввидите второе число')
// let sub = a-b 
// let sum = a+b 
// let  mult = a*b

// console.log(`Разность чисел ${a} и ${b} равна ${sub}, сумма чисел ${a} 
// и ${b} равна ${sum}, произведение чисел ${a} и ${b} равно ${mult}`);

// Задание: Написать программу, которая запрашивает у пользователя Имя, Фамилию, Возраст и выводит в консоль строку 
// “Hello, my name is UserName UserSurname. I’m UserAge”. Для вывода использовать два варианта: конкатенация и интерполяция.

let UserName = prompt ( 'ввидите Имя');
let UserSurname = prompt ( 'ввидите  Фамилию');
let UserAge = +prompt ( 'ввидите Возраст');

//конкатенация
console.log('Hello, my name is ' + UserName + ' ' + UserSurname + ". I'm " + UserAge + '.') ;

//интерполяция
console.log(`Hello, my name is ${UserName} ${UserSurname}. I’m ${UserAge}.`);

