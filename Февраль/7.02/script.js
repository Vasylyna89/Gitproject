// element.querySelector (selector) - метод позволяет найти тег первый подходящий под селектор

// element.querySelectorAll (selector) - метод позволяет найти несколько тегов

//  const title = document.querySelector ("h1") // найти h1 на странице
// title.innerText = "Hallo Viki"

// const myTitle = document.querySelector(".title-2") // найти второй тег title-2 на странице
// console.log(myTitle.innerText)

// найти тег h1 которий написан внутри main
// const mainTag = document.querySelector ("main")
// const mainTitle = mainTag.querySelector ("h1")
// console.log(mainTitle.innerText); // Hallo main

// const mainTitle = document.querySelector("main .title") //шукаемо елемент title с класом в середины main

 

 //Задача Найти теги p и положить их в переменные
    // 1. Найти тег p c текстом Lorem10
    // 2. Найти тег p с текстом Hellooo Text 2
    // 3. Найти тег p с текстом My test description
    // 4. Найти тег p с текстом Lorem5

// 1.  const title = document.querySelector ("p") 

//  2.  const mainTag = document.querySelector ("main")
//      const mainTitle = mainTag.querySelector ("main .p")

// 3.  const body = document.querySelector ("p")

// 4. const footerText = document.querySelector ("footer .my-text") or ("footer p")

// Якщо ми шукаэмо по класу то шукаэмо ("".точка" назва класу)
//Якщо шуаэмо тег то лише вказуэмо що це за тег (p h footer....)

{/* Приклад  <main>
        <p class="my-text">Hello</p>
        <div> 
            <p class="my-text">hello 2</p>
        </div>
    </main>

    const myText = document.querySelector("main div .my-text") */}

    /* element.innerText - свойсто, которое позволяет отобразить илиназначить текст для тега*/
    //Задача. Все h1 сменить названия на "Hallo my friend"
    // const titles = document.querySelectorAll ("h1")
    // // console.log(titles)
    // // titles[0].innerText = "Hallo my friend"
    // // titles[1].innerText = "Hallo my friend"
    // // titles[02].innerText = "Hallo my friend"
    
    // for (let i = 0; i < titles.length; i++) {
    //     titles[i].innerText = "Hallo my friend"}
    
    //Задача. У всех тегах p сменить названия на My beatiful text

    // const text = document.querySelectorAll ("p")
    // for (let i = 0; i < text.length; i++) {
    //         text[i].innerText = "My beatiful text"}


    /* getAttribute ("atrrName") - получить значения атрибута тега
    setAttribute ("atrrName", "atrrValue") - назначить значения атрибута тега
   
   atrrName - название атрибута
   atrrValue - значения атрибута
    */

//    const image = document.querySelector ("img")
//    const imageSource = image.getAttribute("src")
//    console.log(imageSource);

//    image.setAttribute ("src", "./foto/imag4.jpg")


   const foto = document.querySelectorAll ("img")
      for (let i = 0; i < foto.length; i++) {
        foto[i].setAttribute("src", `foto/imag${i+1}.jpg`)
      }


// Есть масив с названиями картинок 
// добавить ети названия в путь к етим картинкам

const imagesNames = ["./clock.jpg", "./koni.jpg", "./ozero.jpg", "./woda.jpg"]
const images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++){
images[i].setAttribute("src", imagesName[i])}
