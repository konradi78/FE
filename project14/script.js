// создание элементов
// 1. createElement() -метод создания элемента



// const header = document.querySelector("header")
// const title = document.createElement("h1")
// title.innerText ="My title"
// header.appendChild(title)

// 2. innerHTML

// const main = document.querySelector("main")
// console.log(main.innerHTML)



// const header = document.querySelector("header")
// header.innerHTML = "<h1>My TiTTle</h1>"



// let section = document.querySelector('section')

// let htmlCode = ''
// for (let i = 0; i < 10; i++) {
//   htmlCode += '<p>Hello</p>'
// }
// section.innerHTML = htmlCode

// const names = ["Arsen", "Yuliya", "Lana", "Maria"]
// let section = document.querySelector('section')


// for(let i=0; i< names.length; i++){
//     section.innerHTML += `<p class="text"> ${names[i]} </p>`
// }

// // Задача. Есть массив объектов prodcuts. 
// const products = [
//     {
//         name: "Iphone 13",
//         price: 10000
//     },
//     {
//         name: "Iphone 14",
//         price: 20000
//     },
//     {
//         name: "Iphone 15",
//         price: 25000
//     },
// ]

// // Для каждого продукта создать разметку вида:
// /*
//     <div class="product">
//         <h5>Назввание продукта</h5>
//         <p>Цена продукта</p>
//     </div>
// */
// // Добавить разметку в <section>

// let section = document.querySelector('section');
// let sum=0
// for (let i = 0; i < products.length; i++) {
//     sum+=products[i].price
//   section.innerHTML += `<div class="product">
//                             <h5>${products[i].name}</h5>
//                             <p>${products[i].price}</p>
//                         </div>`
// }
// section.innerHTML +=`<h1>${sum}</h1>`



// Задача. Есть массив products. 
// 1. Для каждого объекта в массиве products создать разметку
// 2. Отобразить только те продукты, цена которых больше 10000
// 3. Отобразить только те продукты, категория которых - phone

const products = [
    {
        name: "Iphone 13",
        category: "phone",
        price: 15000
    },
    {
        name: "Iphone 14",
        category: "phone",
        price: 20000
    },
    {
        name: "Acer",
        category: "laptop",
        price: 40000
    },
    {
        name: "Asus",
        category: "laptop",
        price: 35000
    },
    {
        name: "Samsung",
        category: "TV",
        price: 27000
    },
    {
        name: "LG",
        category: "TV",
        price: 7000
    },
]

let section = document.querySelector('section');

section.innerHTML += `1. Для каждого объекта в массиве products создать разметку`

for (let i = 0; i < products.length; i++) {
   
  section.innerHTML += `<div class="product">
                            <h3>${products[i].name}</h3>
                            <p> ${products[i].category} </p>
                            <p>${products[i].price}</p>
                            <button>Купить</button>
                        </div>`
}


/*
    <div class="product">
        <h3> {имя продукта} </h3>
        <p> {категория продукта} </p>
        <p> {цена продукта} </p>
        <button>Купить</button>
    </div>
*/

section.innerHTML += `2. Отобразить только те продукты, цена которых больше 10000`

for (let i = 0; i < products.length; i++) {
    if (products[i].price > 10000) {
  section.innerHTML += `<div class="product">
                            <h3>${products[i].name}</h3>
                            <p> ${products[i].category} </p>
                            <p>${products[i].price}</p>
                            <button>Купить</button>
                        </div>`
    }               
}

section.innerHTML += `3. Отобразить только те продукты, категория которых - phone`

for (let i = 0; i < products.length; i++) {
    if (products[i].category == "phone") {
  section.innerHTML += `<div class="product">
                            <h3>${products[i].name}</h3>
                            <p> ${products[i].category} </p>
                            <p>${products[i].price}</p>
                            <button>Купить</button>
                        </div>`
    }               
}
