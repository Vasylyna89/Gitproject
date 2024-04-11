// При нажатие на кнопку button отоброзится в консоли текст, нaписаний в h1

// const button = document.querySelector("button")
//  const title = document.querySelector("h1") 
//  button.addEventListener("click", function() {

//            console.log(title.innerText) })
//            //При нажатие на сам текст h1 в консоли виден был текст
// title.addEventListener("click", function (){
//     console.log(title.innerText)
//   })         

 //При нажатие на картинку отображать в консоли отображать значения атрибута src

// const image = document.querySelector("img")
// image.addEventListener("click", function() {
//     const src = image.getAttribute("src") // "img1.jpg" 
//     console.log(src)
// })

//При нажатие на каждуюкартинку отоброжается ее трарибут в консоли

// const images = document.querySelectorAll("img")
// for (let i = 0; i < image.length; i++){

// images[i].addEventListener ("click", function() {
//    const src = images[i].getAttribute("src") 
// console.log(src)
// }) }

//Переписать эту задачу с помощью forEach()
// images.forEach(function(images) {
//     image.addEventListener("click", function() {
//         const src = image.getAttribute("src")
//         console.log(src)
//     })
// })

/*Переключать главую картинку при клике на ее первью.
1. Найти все мини картинки
2. Найти full картинку
3. Повесить на все мини картинки слушатель события
4. При клике получать путь к картинке
5. Добавлять полученный путь к full картинке
*/

// const images = document.querySelectorAll(".images-container img")
// const fullimage = document.querySelector (" .full-img")
// images.addEventListener("click", function() {
//     const src = images.getAttribute("src")
//     fullimage.setAttribute("src", src)
// })

// При нажатие на кнопку red менятьцвет квадрата на красный

const square = document.querySelector(".square")
const button = document.querySelector("button")
button.addEventListener("click", function() {
    square.style.backgroundColor = 'red'
           })

 

      