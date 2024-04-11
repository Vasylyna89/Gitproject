/*Создать кнопку и красный квадрат с размерами 200х200px. 
При клике на кнопку менять у квадрата цвет заднего фона на зеленый 
и уменьшать его до размеров 100х100px.*/

const square = document.querySelector(".square")
const button1 = document.querySelector(".color")

button1.addEventListener("click", function() {
    square.style.width = "100px"
    square.style.height = "100px"
    square.style.backgroundColor = 'green'
           })

/*Создать кнопку и розовый квадрат с размерами 200х200px.
При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
 */
const square2 = document.querySelector (".square2")
const button2 = document.querySelector(".color2");

button2.addEventListener("click", function() {
    square2.style.backgroundColor = 'blue'
    console.log('blue');
           })

/*Создать кнопку и квадрат с размерами 150х150px. 
При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
 */

//  const square3 = document.querySelector(".square3")
// const button3 = document.querySelector(".colo3")

// button3.addEventListener("click", function() {
//    square3.style.width = "170px"
//     square3.style.height = "170px"
   
//             }) Почемуто не меняется величина, скорее всего я не правильно задаю параметры

/*Создать кнопку и div с классом root.
 При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.*/

 
 const root = document.querySelector (".root")
 const button = document.querySelector (".red")
 button.addEventListener("click", function() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  
    paragraph.style.color = "blue"
    paragraph.style.color = "green"
     root.appendChild(paragraph)
     red.appendChild (paragraph)
});

/*Создать кнопку и div с классом root. 
 При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. 
 Первый цвет синий. Не понимаю как менять цвета:(кликая на одну кнопку) 
 */ 