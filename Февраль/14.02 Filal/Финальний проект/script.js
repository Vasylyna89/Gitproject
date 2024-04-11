/*1.Есть масив product., отрисовать продукти из етого масива 
3.При добавление новго продукта в форме, отображать его в списке продуктов
    products.push(product)
4. Очищать поля форми после того как данные добавлены
*/

const productsContainer = document.querySelector(".products")
const form = document.querySelector("form") //находим форму внутри секции
const productName = form.querySelector(".product-name")
const productPrice = form.querySelector(".product-price")

const products = [
    {
        name: "Молоко",
        price: 100
    },
    {
        name: "Кефир",
        price: 150
    },
    {
        name: "Сахар",
        price: 140
    }
]
function showProducts(){
    productsContainer.innerHTML = ""
products.forEach( function (product, index) 
{ productsContainer.innerHTML+= `
         <div class="product">
            <h5>${product.name}</h5>
            <p>${product.price}</p>
            <button class ="delete-btn" id=${index}> Удалиить </button>
        </div>`

})
deleteProduct()
}

showProducts()

/*
        <div class="product">
            <h5 class="product-name">Название</h5>
            <p class="product-price">Цена</p>
        </div>
*/

// 2.При отправке форми отображать в консоли название и цена товара 
form.addEventListener ("submit", function(event){
    event.preventDefault();
    const product = {
        name:productName.value,
        price:productPrice.value
    }
    //console.log(product);
    
    products.push(product)
    clearInputs() // очистить поля форми после того как данные добавлены
    showNotification () //отоброзить уведомления
    showProducts() 
    

})

function clearInputs() {
    productName.value = ""
    productPrice.value =""
    
}
 function showNotification ()
 {
    const notification =document.querySelector (".notification")
    notification.style.display = "block"
    setTimeout(function () {
        notification.style.display = "none"
        
    },3000)
 }

 function deleteProduct() {
    const deleteBtns = document.querySelectorAll (".delete-btn")
    deleteBtns.forEach(function (btn) {
        btn.addEventListener("click", function(){
            btn.parentElement.remove() //удалить из Html
         const currentIndex =bnt.id
         products.splice(currentIndex, 1) // удалить елемент из масива (1)
         showProducts() //перересовки елементов после удаления
        
        })    
    })   
 }
 
/*
 aray.splice (индекс и количество)

 индекс - индекс элемента, с которого нужно начать удалять
 количество это количество елементов которие нужно удалить

parentElement - родительский елемент
Element.remove - удалить елемент из Html
required - поле обезательное для заполения
 setTimeout (cb, time) - мктод который позволяет визвать операцию через некоторое время
сb функция котораянужно виполнитьчерез время
time - время в милисикундах


*/



