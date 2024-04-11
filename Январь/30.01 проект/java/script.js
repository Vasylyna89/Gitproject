// alert("Hallo") /*вспливающее окно при откритие браузера */
// let username = "Vasylyna"
// console.log(username) //отображаем значения переменной
// console.log("username") //отоброжает текст

// let num = 10
// console.log(num) //10
// num = 50
// console.log(num) //50
// 
// const num1 = 10
// console.log(num1) //10
// num1 = 50 // ошибка
// console.log(num1) //ошибка



// const username = prompt("What's you name") //ввод даных
// console.log(username)
// 
/* console.log() -вывод в консоль
alert() - уведомления
prompt() - ввод даных
typeof () - отображает тип данных (строка- текст чи слова, число- виполняет мат-кие функции)
 */
// const username = "vasylyna"
// console.log(username)
// 
// const num = 10
// console.log(num)
// 
// const num2 ="10"
// console.log(num2)

// const num1 = 100
// const num2 = 50
// 
// const sum = num1 + num2
// console.log(sum)
// console.log( num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2) //остаток в деление
// console.log(num1 ** 2) // перевод  num1 в степень 2 
// 
// const string1 = "100"
// const string2 = "50"
// 
// console.log(string1 + string2) //мтематична дия не видбудеться а лише два числа будуть стояти в одний строчци
// 
// const firstName = "Vasylyna"
// const surname = "Liubinets"
// console.log(`My name ${firstName}  ${surname}`)
// 
// const r = 50
// const g = 70
// const b = 80
// console.log (`rgb (${r}, ${g}, ${b})`)
// 

// const username = prompt("What you name")
// console.log( `Имя пользователя ${username}`)

// const  year = +prompt  ("Какой год рождения")
// console.log(`Ваш возраст: ${2024 - year}`)
// 
// const num =prompt ("Введите число")
// console.log(`suma: ${ num **2}`)

//

// const num = +prompt ("Введите число")
// const num2 = +prompt ("Введите другое число") //при додавани  -/+ перед prompt система буде сумувати (тобто стане числом а не строкою)
// // завджи вводит -/+( и система видасть число) инши значеня дилення чи множеня ставити в консоль

// console.log(`suma: ${ num + num2}`)


//if условие (действие)
//Если количество градусов больше 15, то выводим в консоли "надень футболку"
// Если количество градусов равно 15, то вывести в консоли "сам выбери что надень"
// Если количество градусов больше 30, то вывести в консоли "Останься дома
// const degree = 15
// if(degree > 30) {
//     console.log("Останься дома")
// } else if(degree > 15) {
//     console.log("Надень футболку")
// } else if(degree === 15) {
//     console.log("сам выбери что надеть")
// } else {
//     console.log("Надень кофту")
// }


// / Если сумма выбранных товаров больше 1000, то отобразить в консоли "Ваша скидка 10%"
// Если сумма выбранных товаров больше 1500, то отобразить в консоли "Ваша скидка 15%"
// Иначе отобразить "Скидки нет"
// const sum = 2500
// if (sum > 1500){
//     console.log("Ваша скидка 15 %")
// }
// else if( sum > 1000){
//     console.log( "Ваша скидка 10 %")
// }
// else {
//     console.log("Скдки нет")
// }


//Если число четное , то в консоли (четное0) если число не четное , то в консоли (не четное)
// const number = 30
// if (number % 2 === 0){
//     console.log( "четное")
// }else {
//     console.log("нечетное")
// }

const number = 20
if (number > 0){
        console.log( "положительное")
    }else if ( number === 0) {
        console.log("отрицательное")
    }else {
    console.log("ноль")}


/*Условные оператори
> больше
< меньше
>= больше или равно
<= меньше или равно
==-равно
=== равно с учетом типа данных
!== не равно
Логические операции
&&- логическое И
if(degree> 15 && degree <50)true если оба одинаковые*/

// const num = +prompt ("Введите число")
// if(num > 100){
//     console.log( "Больше ")
// } else if (num ===100)
// {console.log("Равно")}
// else{
//     console.log("Меньше")
// }
