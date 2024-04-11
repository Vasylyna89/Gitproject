/*Написать цикл, который создает множество параграфов
 с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). 
 Добавить созданные параграфы в div с классом numbers.*/

 const numbersDiv = document.querySelector (".numbers")
 
 for (let i = 100; i >= 50; i -= 10) {
    numbersDiv.innerHTML += `<p>${i}</p>`
}



 /*Написать цикл, который проходится по массиву строк, 
 для каждой строки создает параграф и добавляет его в div с классом strings_container. 
 Строки взять произвольные.*/

 const numbers = ["W10", "B30", "L45", "A67", "V98"]
 const containerDiv = document.querySelector (".strings_container")

 for (let i = 0; i < numbers.length; i ++) {
    const number  = numbers[i]
    containerDiv.innerHTML += `<p>${number}</p>`
}




 /*Написать цикл, который проходится по массиву 
 с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) 
 - и создает карточки только для совершеннолетних пользователей.
  Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
 Добавить все карточки в div с классом users_container. */

const users = [
    {
        first_name: "Anna",
        last_name : "Morgan",
        age : 16
    },

    {
        first_name: "Kai",
        last_name : "Noring",
        age: 23
    },

    {
        first_name: "Moli",
        last_name : "Robin",
        age : 29
    },
]
const usersDiv = document.querySelector (".users_container")
for (let i = 0; i < users.length; i ++) {
    if (users[i].age > 18)
    console.log(`${users[i].first_name } ${users[i].last_name} ${users[i].age} `)
    

}