//При отправки заявки в консоли отображать "Отправлено"

const form = document.querySelector("form")
const name = document.querySelector (".username")  // ("input[name="username"]")
const age = document.querySelector(".userage")  
const usersContainer =document.querySelector (".users")


//Отоброзить все карточки пользователей
const users = [
    {
        name:"Tino",
        age: "100"
    },
    {
        name:"Kori",
        age:"24"
    },
    {
        name: "Linda",
        age:"90"
    },
]

function showUsers(){
    usersContainer.innerHTML = "" // очищаем контейнер перед отображением новых пользователей
    users.forEach( function (user) {
    usersContainer.innerHTML+= `
         <div class="user">
            <h5>${user.name}</h5>
            <p>${user.age}</p>
        </div>`
    
})
}
showUsers() //визываем функцию отрисовки в html в момент загрузки страницы

// ("input[name="userage"]")
form.addEventListener("submit", function (event) {
    event.preventDefault() //отменяет действия по умолчанию
    //console.log(event)
    //console.log("Отправлено");
    console.log(username.value); //отоброзит данные из input username
    console.log(age.value);
    const user ={
        name:username.value,
        age: age.value
    }
    users.push(user)
    showUsers() //визываем функцию отрисовки в html последобавления нового пользователя
})


/* При отправки формы страница обновляется по умолчанию, но нам такое поведение нужно отменять.
Для того что бы отметить подобное поведение, используэтся функция preventDefault(),
которая реализованая у объекта собития, которое происходит.

Когда в браузуре пррисходит любое собития (клик, сабмит ...) 
автоматически создается обьетк собитися (event)
Которое можно получить в коллбек функиции метода addEventListener

В объекте собития event есть свойсто target -это елемент, который вызвал собитие.

 У input есть свойство value, внутри которого лежат заполненные пользователем данные
  input{
    value " Name "
  }

События:
click - собития клика по тегу
submit - собития отправки формы, оно реализовано только у формы

*/