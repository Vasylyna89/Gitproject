// console.log('1243');
// console.log(1243);

// let name = 'Vacho'
// let age = 26

// let user = {
//     name: 'Vacho',
//     age: 26
// }



// console.log(`Привет ${user.name}!\nТебе ${user.age} лет`); 

// console.log('Привет name! Тебе age лет'); 
// console.log('Привет ' + name + '! Тебе ' + age + ' лет'); 

// console.log(`Привет ${name}!\nТебе ${age} лет`);

// let user1 = {
//     userName: 'Vacho',
//     age: 26
// }

// // let newUser = user.userName
// // let age = user.age

// // пример выше равен примеру ниже

// let {userName, age} = user // Десруктуризация объекта


// console.log(`Привет ${userName}!\nТебе ${age} лет`);
// console.log(typeof(console)) //- обект

// let document // обэкт
// = {
//     write: function //функция
//     () {
//         'выводит значение на экран'
//     }
// }

// // добавляет новий документв масив - push

// let arr = []
// console.log(arr);

// arr.push('hi', 23, '343', 'sfd')
// console.log(arr);

// arr.pop()

// arr.unshift('fff')
// console.log(arr);

// arr.shift()


// // return возращает конечный резульат результат 
// function sum(a, b) {
//     return a + b;
//  }
//  let result = sum(5, 7)
 
//  let result2 = sum(3, 2)
 
//  let result3 = sum(7, 2)
 
//  console.log(result + result2 + result3);


//  function func(a, b) {
//     if (a > b) {
//         return a  
//     } else if(a < b) {
//         return b
//     } else {
//         return '='
//     }
// }

// let res = func(5, 1)
// console.log(res);

// console.log(res ** 2);

/*Напишите функцию, которая в качестве аргументов получает два числа
 и возвращает массив чисел со значениями от меньшего числа к большему.*/

//  function vach(num1, num2) {
//     let arr = []

//     if (num1 > num2) {
//         for (let i = num2; i < num1; i++) {
//             arr.push(i) 
//         }
//     } else if (num1 < num2) {
//         for (let i = num1; i < num2; i++) {
//             arr.push(i) 
//         }
//     }
//     return arr
// }

// console.log(vach(3, 8));
// console.log(vach(8, 3));

 // или такой вариант 


//  function vach(num1, num2) {
//     let arr = []
//     let start
//     let end

//     if (num1 > num2) {
//        start = num2
//        end = num1
//     } else if(num1 < num2) {
//         start = num1
//         end = num2
//     }

//     for (let i = end; i > start; i--) {
//         arr.push(i) 
//     }

//     return arr
// }

// let arr1 = vach(24, 2)
// let arr2 = vach(13, 7)
// let arr3 = vach(4, 2)

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

/*В программе объявлена переменная list, которая содержит массив чисел. 
Используя цикл посчитайте сумму чисел и выведите в консоль.
const list = [65, 98, 34, 54, 3, 2, 8, 67]*/

// const list = [65, 98, 34, 54, 3, 2, 8, 67] 
//     let sum = 0 
//     for (let i = 0; i < list.length; i++) {
//         sum = sum + list[i]  
//     }
// console.log(sum);

/*В программе объявлена переменная list, представляющая массив положительных и отрицательных численных 
значений.Используя цикл, выведите в консоль сумму положительных чисел.*/

const list1 = [65, 98, -34, 54, -3, 2, 8, -67]
let sum = 0 
for (let i = 0; i < list1.length; i++) {
    if (list1[i] > 0){
    sum = sum + list1[i] 
    //  if (list1[i] > 0) {
    //     sum = sum + list[i] 
}}
console.log(list1);
console.log(sum);