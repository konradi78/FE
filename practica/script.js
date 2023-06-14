// const list = [23, 354, -23, 45, 23, 34]
// let res1 = 0
// let res2 = 0
// let diff = 0
// for (let i =0; i < list.length; i++) {
//     if (list[i] % 2 == 0){
//         res2 +=list[i]}
//     else {
//         res1 +=list[i]
//     }  
// }

// diff = res2 - res1
// console.log(diff);

const list = [23, 354, -23, 45, 23, 34];
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < list.length; i++) {
  if (list[i] % 2 === 0) {
    sumEven += list[i];
  } else {
    sumOdd += list[i];
  }
}

const difference = sumEven - sumOdd;
console.log("Разность сумм четных и нечетных чисел:", difference);