 // Создания елементов html

 /* document.createElement("tagName") позволяет создать html тег
element.appendChild(element) добавляетм созданый елемент в тег html

elenemt.innerHTLM - свойство которое позволяет получить или назначить htlm разметку
elenemt.innerText - свойство которое позволяет получить или назначить текстовий контент

 */
//Способ 1.  Создать тег H1 mein
// const title = document.createElement ("h1")  // создаем тег h1 в переменную title
// title.innerText = "Hallo World"
// const main = document.querySelector ("main") // поиск родительського елемента для созданого тега
// main.appendChild(title) // в найдений main  кладем созданий title( тег h1) 


/*Способ 2. своство inner.Text лучше сздавать по етому способу но не всегда ( с кнопкой не работае)
*/
// const main = document.querySelector("main") // поиск родительского елемента, куда хотим положить тег
// main.innerHTML += "<h1>Hello World</h1>"

// main = {
//     innerHTML: "<p>Hallo World </p>"
// }
// main.innerHTML += "<h1>Hallo World </h1>" -// при додавание + система буде просто додавати наступне слово, текст...
// main.innerHTML = main.innerHTML + "<h1>Hallo World </h1>"
// main.innerHTML = "<p>Hallo World </p>" + "<h1>Hallo World </h1>"

// Задача. Создать тег p в main с текстом Hello
// const teg = document.createElement ("p")
// teg.innerText = "Hallo World" // свойство тому ставимо лапки
// const main = document.querySelector ("main")
// main.appendChild(teg) // функция тому ставимо дужки

// //или вот так можна решить 
// const main = document.querySelector("main")
// main.innerHTML += "<p>Hello World</p>"

//Задача. Создать 20 тегов p в main с числами от 0 до 19

// const mainElement = document.querySelector("main")
// for (let i = 0; i < 20; i++){
//     main.innerHTML += `<p>${i}</p>`
// }

//Задача. Есть масив имен . Создать теги p для каждогоиз имени в main

// const names = ["Arsen", "Esmira", "Hanna", "Artem", "Vasylyna"]
// const main = document.querySelector("main")
// for (let i = 0; i < names.length; i++) {
//     const name = names[i];;
//     main.innerHTML += `<p>${names[i]}</p>`
// }

//Задача. Есть масив ссылок на картинки.Для каждого елемента масива создаемкартнку из ссылкой

// const links = ["https://placehold.co/600x400/png", "https://placehold.co/320x480/png", "https://placehold.co/300x200/png"]

// const main = document.querySelector ("main") 
// for (let i = 0; i < links.length; i++)// це цикл який ми завжди використовуэмо
//  {
//         main.innerHTML += `<img src="${links[i]}">`
//      }
    

//Задача.  Есть масив обектов. Отобразить в консоли  строку *Название:Ссылка
//Задача. Есть масив обектов. Отобразить <a href="">Названия </a>
// const links = [
//     {
//         name: "Google",
//         link: "https://google.com"
//     },
//     {
//         name: "Amazon",
//         link: "https://amazon.com"
//     },
//     {
//         name: "Youtube",
//         link: "https://youtube.com"
//     }
// ]
// const main = document.querySelector("main")
// for(let i = 0; i < links.length; i++)  
// {
    // console.log(`${links[i].name}: ${links[i].link}`)
//     console.log(`<a href=${links[i].link}></a>`)
    
// }

//Задача. Есть масив обектов. На его основе создать карточки елементов

const users = [
    {
        name: "Arsen",
        age: 25
    },
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 40
    },
    {
        name: "User 3",
        age: 35
    }
]
const main = document.querySelector("main")
for(let i = 0; i < users.length; i++)  {
    console.log(`${users[i].name}, ${users[i].name}`)
    main.innerHTML += `
        <div class="user">
        <h1>${users[i].name}</h1>
        <p>${users[i].age}</p>
    </div>    
    `
}







