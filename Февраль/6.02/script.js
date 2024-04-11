// функция - це блок различних команд, последованость действия.
// с помощью функции наш код становится упорядоченным
// чем кажды раз писать повторять нескольо команд, можно спрятать их в одну функцию




//  function declaration - способ создания функции

// function showElements ( number){
//     console.log("Запрос в базу данных") или ( `Запрос в базу данных ${ number} данных`)
//     console.log("Отформатироватть данные")
//     console.log("Отобразить данные в html") //for [{}, {}, {}] - для каждого {} рисуем карточку
// }

// showThousandElements() //виклик функции   или сделать так  showElements( 1000) //виклик функции
// showThousandElements() //виклик функции                    showElements( 90) //виклик функции
// showThousandElements() //виклик функции                    showElements( 600) //виклик функции
// showThousandElements() //виклик функции                    showElements( 100) //виклик функции


// function fnName(parem1. param2){
//     тело функции
// }


// Задача. Создать функцию которая називается power, она получет два аргумента 
//первый- основания степени, а второй сама степень и виыводит в консоль результат возведения

// function power( Number1, Number2) 
// { const result = Number1 ** Number2
// console.log ( result) // или console.log (Number1 ** Number2)
// }
// power(10, 2)
// power (3, 3)
// power (5, 3)
// power (4, 6)

// Задача. Создать функцию, которая називается square, получить два аргумента - длина и ширина
// и возвращает в консоли квадратуру. `N` квадратов

// function square(width, height) 
// { 
// console.log( `${width * height}`)
// }
// square(5, 10)

// Задача. Создать функцию, которая принимает два аргумента - имя и возраст
// и в консоли отобразить строку "Вас зовут *Имя* и вам *возраст* лет"

// function suma ( age, Name)
// {
//     console.log( ` Вас зовут ${Name}  возраст ${age}`);
// }
// suma  ("Arsen", 25)
// suma ("User", 30)

//Задача. Написать функцию которая получит число в аргумент
// и в консоли отображает "четное" если число,  "нечетное" если нечетное. 

// function checknumber ( number)
// { if (number %2 === 0){
//     console.log("четное" );
// }
//     else {}
//     console.log ("нечетное" )
// }

// checknumber( 10)
// checknumber (17)


// Задача.  Написать функцию, которая получает число и в консоли отображает
// числа от 0 до этого числа
// function schowNumbers (numbers){
//     for (let i = 0; i < numbers; i++) {    
//     }
//     console.log(i)
// }

 // schowNumbers (5)
// schowNumbers(100)

//Задача.  Написать функцию, которая получает число и в консоли отображает
// массив из чисел от 0 до этого числа

// function schowNumbers (numbers){
//         const arr = []
//         for (let i = 0; i < numbers; i++) { 
//            arr.push(i)
//         }
//         console.log([i])}

//         schowNumbers (10)
//         schowNumbers(100)


//Задача. Создать функцию, которая получает два аргумента - оба числа
// и отображает в консоли бОльшее из них
// если числа равны, то в консоли отображается "N равно N"

function checkBiggerNumber(number1, number2) {
    if(number1 > number2) {
        console.log(number1)
    } else if(number2 > number1) {
        console.log(number2)
    } else {
        console.log(number1 + " равно " + number2)
    }
}

checkBiggerNumber(10, 50)

//const arr = [10, 20, 30, 40, 50] // length = 5
// Чтобы получить последний элемент массива нужно [length - 1]
// Создать функцию, которая получает два аргумента - оба числа
// и отображает в консоли бОльшее из них
// если числа равны, то в консоли отображается "N равно N"

