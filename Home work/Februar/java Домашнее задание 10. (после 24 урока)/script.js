/*1.Создать в html форму с тремя инпутами (имя, фамилия, возраст). 
Написать скрипт, который при отправке формы выводит собранные данные в консоль.*/

/*2. Доработать процесс таким образом, чтобы при отправке формы данные 
из нее добавлялись в массив users в виде объекта.*/

const form = document.querySelector ("form")
const userFirstname = form.querySelector(".first_name")
const userLastname = form.querySelector(".last_name")
const userAge = document.querySelector (".user-age")
const usersContainer =document.querySelector (".users")


const users = [];

form.addEventListener ("submit", function(event){
    event.preventDefault();
    const Newuser = {
        name:userFirstname.value,
        last_name:userLastname.value,
        age:userAge.value,

    }
    users.push(users);
    rerender(usersContainer, users);

    // console.log(user);
    console.log(users);
}) 


/*Реализовать функцию rerender. 
Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива.
Настроить rerender при добавлении нового пользователя.*/

function rerender(usersContainer, users) {
    userFirstname.value = ""
    userLastname.value =""
    userAge.value =""
}


/*Доработать rerender таким образом, чтобы при двойном клике по карточке из массива 
удалялся пользователь по id и вызывался rerender.*/

function deleteUsers() {
    const deletesub = document.querySelectorAll (".submit")
    deletesub.forEach(function (submit) {
        submit.addEventListener("click", function(){
            submit.parentElement.remove() 
         const currentIndex =submit.id
         products.splice(currentIndex), 
         showProducts() 
        
        })    
    })   
 }




