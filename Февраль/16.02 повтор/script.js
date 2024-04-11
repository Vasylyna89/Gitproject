/*Написать цикл, который проходится по массиву с объектами 
- у объектов свойства first_name, last_name и  age 
(данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. 
Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
Добавить все карточки в div с классом users_container.*/

// let users = [
//     {
//         firstname: 'John',
//         lastname: 'Smith',
//         age: 19   
//     },
//     {
//         firstname: 'Ben',
//         lastname: 'Smith',
//         age: 16   
//     },
//     {
//         firstname: 'Bob',
//         lastname: 'Brown',
//         age: 20   
//     },
//     {
//         firstname: 'Tom',
//         lastname: 'Hardy',
//         age: 46   
//     },
//     {
//         firstname: 'Lily',
//         lastname: 'Winston',
//         age: 12   
//     }
// ]

// function createCards(object){
//     // Создание карточки
//    let card =  document.createElement('div');
//     card.innerText = `${object.firstname}, ${object.lastname}, ${object.age}`;
//     // Находим родительский блок users_container
//     users_container.appendChild(card);
// }

// for(let i=0; i<users.length; i++){
//     if(users[i].age > 18){
//         createCards(users[i]);
//     }
// }




// let user = {
//     firstname: 'Lily',
//     lastname: 'Winston',
//     age: 12   
// }

// // console.log(user.firstname); //Lily

// for(let key in user){
// // console.log(key); //ключи
// console.log(user[key]); //значения
// }

//Написать программу, которая находит параграфы и заменяет в каждом из них текст на “hello”.

let paragraphs = document.querySelectorAll('p1')
paragraphs.forEach((paragraph) => {
    paragraph.innerText = 'hello';
});

// let numbers = [1, 2, 5, 10, 38];

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]**2);
// }

// // => возвращает действие
// // стрелочная функция
// numbers.forEach(num => {console.log(num**2);})

// Обычная функция
// function forEach(num){
//     console.log(num**2);
// }

// анонимная функция(колбек) 
// numbers.forEach(function(num){
//     console.log(num**2);
// })

//Написать цикл, который создает множество div-ов c цветами от rgb(255, 0, 255) 
//до rgb(255, 255, 255). У дивов цвет должен меняться с шагом 10.

for(let i=0; i<=255; шаг +10)
{ const block = document.createElement('div');
    //создаем див
    block.style.backgroundColor = `rgb(255, ${}, 255)`;
    block.style.backgroundColor = `rgb(255, ${i}, 255)`;
    block.style.width = '100%';
    block.style.height = '20px';
    // Добавляет эл. в конец body
    document.body.appendChild(block);
}
