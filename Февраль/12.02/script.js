 /*Обработка собитий 
 
 element.addEventListener ( type , callback) - метод слушателя собития

 type - тип собития  (click, scroll....)
 callback - функция обратного действия 

Задача
 A. При нажатие на кнопку в консоли отображается click 
 B. При нажатие на кнопку увеличивать чысло в h1 на 1 инкремент
 C. При нажатие на кнопку уменшать чысло в h1 на 1 инкремент
 D. При нажатие на кнопку Сброс меняет значения на 0
 I. Убрать возможность появления отрицателиных чисел. Минимальное значения 0
 F. максимально допустимое значения 10. Когда вы достигли этого значения -отоброзить
 тег р с текстом "Это мксимальное значения " и увелечения дальше не проходит
 
 */
// const button = document.querySelector(".btn") //поиск елемента
// const title = document.querySelector ("h1")  //поиск елемента
// const body = document.querySelector ("body")
// const butt = document.querySelector (".btn-minus") 
// const buttonAll = document.querySelector(".btn-all")

// let number = 0
// button.addEventListener("click", function() {
//     number++
//     if(number === 10) {
//         title.innerText = `${number} Это максимально допустимое значение`
//        // body.innerHTML+-"<p> Это мксимальное значения </p>"
//     } else {
//         number++
//     title.innerText = number // добавить текст number в h1
//     // console.log("clik")

// }})
// butt.addEventListener("click", function()
//  { 
//     if (number > 0)
//     number-- 
//     title.innerText = number
//    })
//    buttonAll.addEventListener("click", function() {
//     number = 0
//     title.innerText = number
//    })

// function sum(a, b) {
//     console.log(a + b)
// }
// sum(10, 15) // immediately invoke function - немедленный вызов функции

// Задача. При нажатие на все кнопки  в консоли отображать "Кликнули" используя цикл for

const button = document.querySelectorAll("button") //он возвращает масив
for (let i = 0; i < button.length; i++) {
buttons[i].addEventListener("click", function() {
    console.log("Кликнули")
})
}
 /*Метод forEach- меттд масива который позволяет применить Callbeck ко всем елементам масива,
  используется вместо цикла for упращенная версия котрая виглядит более читабельно
  
    1. item - каждый элемент массива
    2. index - индекс элемента массива в текущей итерации
    3. arr - сам массив
*/

//   array.forEach(function(index, item,array))

//Задача. Есть масив numbers. Ввысти в консоль каждое число из масива numbers  с помощю for
const numbers = [10, 20, 30, 40, 50]
// for(let i = 0; i < numbers.length; i++)
// console.log(numbers[i]);
// abo

numbers.forEach(function(number){
    console.log(number);  // number - каждый елемент,текущий елемент numbers[i]
})

//Задача. Есть масив имен. Ввысти в консоль строку "Привет", {шмя }из масива  с помощю forEach

// const names = ["Arsen", "Hanna", "Sergey", "Maria"]
// names.forEach(function(name){
//     console.log(`Привет, ${name}`); })








//Homework
const array = []
let max_length = 0
for (let i = 0, i < array.length, i++) {
 if(max_length < array[i].length){
    if(max_length> array[i].length)
 }
    
}

const array = ["Arsen", "Ivan", "Kolya"]
let max_length = 0
for(let i = 0; i < array.length; i++) {
    // console.log(array[i].length)
    if(max_length < array[i].length) {
        max_length = array[i].length
    }
}
/*
    i = 0, array.length = 3
    1. i = 0, 0 < 3 - true, max_length < array[0].length, 0 < 5 - true, max_length = 5
    2. i = 1, 1 < 3 - true, max_length < array[1].length, 5 < 4 - false, max_length = 5
    3. i = 2, 2 < 3 - true, max_length < array[2].length, 5 < 5 - false, max_length = 5
*/

// 5, 4, 5
// console.log(sum(10, 15)) // 25

// const mySum = sum(10, 15) // 

// // if(arr.length == 0) { return null }
// const username = "Arsen"
// username.length // длина строки - количество символов в строке 5
// Создать переменную, которая будет сохранять самую длинную строку в массиве

const array = ["Arsen", "Ivan", "Kolya"]
let max_length = 0
for(let i = 0; i < array.length; i++) {
    // console.log(array[i].length)
    if(max_length < array[i].length) {
        max_length = array[i].length
    }
}
/*
    i = 0, array.length = 3
    1. i = 0, 0 < 3 - true, max_length < array[0].length, 0 < 5 - true, max_length = 5
    2. i = 1, 1 < 3 - true, max_length < array[1].length, 5 < 4 - false, max_length = 5
    3. i = 2, 2 < 3 - true, max_length < array[2].length, 5 < 5 - false, max_length = 5
*/

// 5, 4, 5