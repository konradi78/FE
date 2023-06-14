// let players =[
//  {
//     name: "Alex",
//     health: 100,
//     damage: 10
//   }
//   ,
//   {
//     name: "Serge",
//     health: 95,
//     damage: 8
//   }
// ]

// function summator(num1, num2) {
// 	return num1 + num2
// }
// alert(summator(10, 9));

// sum =0
// for (let i = 1; i <= 10; i += 2) {
//     sum=sum+i
    
// }
// console.log(sum)

// function sumsEvenNumbers() {
//     let sum = 0;
  
//     for (let i = 2; i <= 10; i+=2) {
//         sum += i; 
//     }
  
//     return sum;
//   }
//   console.log(sumsEvenNumbers())

// function calcAverageGrades(grades) {
//     let sum=0
//     for (let i = 0; i < grades.lenght; i++){
//         sum += grades[i]
//     }
//     return sum / grades.lenght
// }


// console.log(calcAverageGrades([3,4,5]))


// function calcAverageGrades(grades) {
//     let sum = 0;
//     for (let i = 0; i < grades.length; i++) {
//       sum += grades[i];
//     }
//     return sum / grades.length;
//   }
  
//   console.log(calcAverageGrades([3, 4, 5])); // Выведет: 4


// function average_rating(grades) {
//     let sum = 0;
    
//     for (let i = 0; i < grades.length; i++) {
//       sum += grades[i];
//     }
    
//     const average = sum / grades.length;
    
//     return average;
// }
  
// console.log(average_rating([3, 4, 5]));




// function func_name(players) {
//     let sum = 0;
//     for (let i = 0; i < players.length; i++) {
//       sum += players[i].damage;
//     }
//     const average = sum / players.length;
//     return average;
// }

// let players =[
//     {
//        name: "Alex",
//        health: 100,
//        damage: 10
//      }
//      ,
//      {
//        name: "Serge",
//        health: 95,
//        damage: 8
//      }
//    ]

// const avg_damage = func_name(players);
// console.log(`Средний ущерб для указанных игроков равен ${avg_damage}`);


// const users = [
//     ['Ivan', 20, 'ivan@example.org'],
//     ['Petr', 30, 'petr@example.org'],
//     ['Pavel', 40, 'pavel@example.org']
//  ];
 

// console.log(users[0][0])


// console.log(users[2][2])


//  // Вывести имя 1-го юзера
//  // Вывести возраст 3-го юзера
//  // Вывести возраст 2-го юзера

//  function calcDicount (sum, discount) {
//     let sum = sum - (sum * discount )
//  }


 // принимает два аргумента
// 1. сумма заказа
// 2. размер скидки по шкале 0 - 100
/// возвращает сумму заказа с учетом скидки
// function apply_discount(cost, discount) {
//     return cost * (1 - discount / 100);
// }

// console.log(
//     apply_discount(1000, 20) // вернет 800
// );


// const product = {title: 'Product 1', price: 500, quantity: 10};

// func func_name() {}

// console.log(currency_exchange(product));


function calcArea(radius) {
    const area = Math.PI * radius ** 2;
    return area;
  }

  const radius = 5;
const circleArea = calcArea(radius);
console.log(`Площадь окружности с радиусом ${radius} равна ${circleArea}`);