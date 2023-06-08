// const names = ["Alexander", "Yuliya","Arsen"]
// console.log(names[1])

// const numbers = [10, 15, 0, 100, 21]
// console.log(numbers[2])

// const arr = ["Hello", 100, true, ["Hello","Hello World"]]

// const countries = ["Germany", "France", "UK"]
// console.log(countries.length)

// countries.push("Spain")
// console.log(countries.length)

// const names = ["Alexander", "Yuliya","Arsen"]

// let name = prompt("Введите добавляемое в массив имя1:");
// let name1 = prompt("Введите добавляемое в массив имя2:");
// names.push(name,name1)

// for (let i = 0; i < 100; i++) {
//     if(i % 2 == 1){
//         console.log(i)
//     }
            
// }

// const names = ["Arsen","Sergey","Bogdan","Elena"]

// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }

// const numbers = [10, 20, 5, 11, 6, 4]
// for (let i = 0; i < numbers.length; i++) { 
//              console.log(numbers[i]**2)
// }

// const countries = ["Germany", "France", "Spain","Chech"]
// for (let i = 0; i < countries.length; i++) { 
//     console.log(countries[i].toUpperCase())
// }
// console.log(countries.length)



const countries = ["Germany", "France", "Spain","Chech"]
for(let i = 0; i < countries.length; i++) {
    const upperCaseCountry = countries[i].toUpperCase()
    console.log(upperCaseCountry)
    // countries.push(upperCaseCountry) // если хотим заполнить другой массив странами в верхнем регистре
}
