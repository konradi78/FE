// const array = ["Hello", "Hello World", 10, true]
// console.log(array)

// const obj = {
//     // key: value
// }

// const user = {
//     email: "test@mail.ru",
//     name: "Arsen",
//     age: 25,
//     hobbies: ["football", "design"],
//     info: {
//         descr: "Lorem5"
//     }
// }

// console.log(user)
// console.log(user.name)
// console.log(user.hobbies[1])

// const notebook1 = {
//     model: "Lenovo",
//     price: 1000
// }

// const notebook2 = {
//     model: "Asus",
//     price: 1500
// }

// const notebooks = [
//     {
//         model: "Lenovo",
//         price: 1000
//     },
//     {
//         model: "Asus",
//         price: 1500  
//     },
//     {
//         model: "MSI",
//         price: 2000  
//     },

// ]

// let sum = 0

// for (let i = 0 ; i < notebooks.length; i++) { 
//     sum = sum + notebooks[i].price 
// }
// console.log(sum)



// for (let i = 0 ; i < notebooks.length; i++) { 
//                   console.log (notebooks[i].model )
//      }

const users = [
    {
        username: "Alex",
        email: "alex@mail.ru",
        login: "alex777",
        age: 15
    },
    {
        username: "John",
        email: "john@mail.ru",
        login: "john888",
        age: 25
    },
    {
        username: "Elena",
        email: "elena@mail.ru",
        login: "elena999",
        age: 30
    },
]

//  for (let i = 0 ; i < users.length; i++) { 
//                    console.log (users[i].username + " , ваш Email: " + users[i].email + " , а ваш логин - " + users[i].login)
//       }

// for (let i = 0 ; i < users.length; i++) {
//     if (users[i].age > 18) {
//     console.log(`Ваш Email - ${users[i].email}, а ваш логин - ${users[i].login}`)
//     }     
// }
const validatedUsers = []
for (let i = 0 ; i < users.length; i++) {
    if (users[i].age > 18) {
        validatedUsers.push({login: users[i].login, age : users[i].age})
    }     
}
console.log(validatedUsers)





