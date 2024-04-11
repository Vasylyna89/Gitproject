// typeof -только для проверки данных, ми його не використовуэмо
//  const - не зминюэться
// let - можуть зминюватися значення
// масив []- для збереження великои килькости данних ^^
// ;- закинчення действия

// const user = []
// console.log(user)

// const.push('tom')
// console.log(user);

// const produckt = [ 'Milk', 'Chocolad', 'Tea', 'Egss', 'Bread' ]
// console.log(produckt )

// const produckt =[] 
// produckt.push('Milk') //add -добавить куда то
// produckt.push('Chocolad') //добавить
// produckt.push('Tea') //добавить
// console.log(produckt);

// let arr = [4, 6, 8, 2, 9]
// let newArr = []
// // newArr.push( arr[0] ** 2)
// // newArr.push( arr[1] ** 2)
// // newArr.push( arr[2] ** 2)
// // newArr.push( arr[3] ** 2)
// // newArr.push( arr[4] ** 2)

// for (let i = 0; i < arr.length; i++) {
//     newArr.push( arr[1] ** 2);
    
// }
// console.log(newArr);


Object

// let userObj = {imy: 'Ovasapyan', familie: 'Vacho', age: 25}

// let userObj = {
//     lastName: 'Ovasapyan', 
//     name: 'Vacho', 
//     age: 25
// }
//  // нове значення
// userObj.name = 'ivan'
// userObj.height = 189
// // або
// // userObj.height ['height'] = 189

// console.log(userObj);

// Задание: Создать объект с названием и ценой продукта и выведите данные в консоль.

// let producktObj = {
//     Name :'Millk',
//     price : 6
// }
// console.log (producktObj);


let produckts = [
    {
    title: 'Millk',
    price: 10,
    count: true
},
{
    title: 'Bread',
    price: 14,
    count: false
},
{
    title: 'Chocolate', 
    price: 5,
    count: true
},
]

for (let i = 0; i < products.length; i++) 
// {
//     console.log( `Название: ${products[i].title} цена: ${products[i].price}$`)
// };
if (products[i].count === true) {
    console.log(products[i].title);
} 

    
