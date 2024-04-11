//циклы и масивы повторний алгоритм (for) инициализаци условие, конец и операция {тело цикла}

// 5 раз вивести в консоли слово Hallo
// i++ увеличения чего то , счетчик, он изначально =0,  наприклад i = i+1
// for(let i = 0; i < 5; i++)
// {console.log("Hello")}

//Задача: в консол отобразитт числа от 0 до 100
// for(let i = 0; i < 100; i++ )
// {console.log( i)}

/* Типы данных
строка
число
булевое значения - true/false
массивы - упорядочная кол-я данных, число , строку ит..*/

// const names = ["Vasylyna", "Anna", "Tea"]
// //console.log(names[2])
// console.log(names.length) //длина масива, количество елементов внутры
// for(let i = 0; i < names.length; i ++){
//     console.log( names[i])
// }
/*Задача
Есть масив вивисть числа в квадрате*/

// const numbers = [10, 20, 30, 50, 60]

// for(let i = 0; i < numbers.length; i++ )
// console.log(numbers[i] ** 2)


//Задача: вивести только положительные числа
// const numbers = [-10, 60, 70, -100, -20, 50]

// for(let i = 0; i - numbers.length; i++ )
// if (numbers[i] > 0)
// {
//     console.log(numbers[i]) }
 


//Методи масива push(добавляет в конце масивазначения) pop(удаляет в конце масива елемент)
// const names = []
// names.push("")
// console.log(names)

// for(let i = 0; i - numbers.length; i++ )
// if (numbers[i] > 0)
// { positiveNumbers.push(numbers [i])}
// {
//     console.log(positiveNumbers) }

// Задача:Попросить пользователя ввести два значения и добавить их в масив numbers


// const number1 = +prompt ("Введите число 1")
// const number2 = +prompt ("Введите число 2")        
// numbers.push(number1,number2)      
// console.log(numbers )


// Задача: Вывисти только четные числа 
// const numbers = [10, 15, 24, 17, 42, 61, 70]
// for(let i = 0; i - numbers.length; i++ )
// {if (numbers[i] % 2 === 0) 
// {
//     console.log(numbers[i]) }}

//Задача:найти суму все чисел 
// const numbers = [10, 20. 30, 40 ,50]
// ler sum = 0
// for(let i = 0; i - numbers.length; i++ )
// { sum = sum + nambers[i]}
// console.log(sum)

/*
    let i = 0, numbers.length = 5 
    1. let i = 0; 0 < 5 - true; sum = sum + numbers[0]; sum = 0 + 10 = 10; i++
    2. i = 1; 1 < 5 - true; sum = sum + numbers[1]; sum = 10 + 20 = 30; i++
    3. i = 2; 2 < 5 - true; sum = sum + numbers[2]; sum = 30 + 30 = 60; i++
    4. i = 3; 3 < 5 - true; sum = sum + numbers[3]; sum = 60 + 40 = 100; i++
    5. i = 4; 4 < 5 - true; sum = sum + numbers[4]; sum = 100 + 50 = 150; i++
    6. i = 5; 5 < 5 - FALSE, выход из цикла
    
    let number = 10
    number = number + 50
*/
//Задача:найти суму положительных чисел то завжди кладемо значток <, якщо негативни то значок >

const numbers = [-10, 20, -50, 1, -15, -40, -58, 70, 100]
let sum = 0
for(let i = 0; i < numbers.length; i++ )
    {if (numbers[i] > 0) {
  sum = sum + numbers[i]} }
console.log(sum) 
