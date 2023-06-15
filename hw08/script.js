console.log("Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.")

function printEvenNumbers(num1, num2) {
  let start = 0
  let end = 0
  if (num1 > num2) {
    start = num1
    end = num2
  } else {
    start = num2
    end = num1
  }
  if (start % 2 !== 0) {
    start--
  }
  for (let i = start; i >= end; i -= 2) {
    console.log(i)
  }
}
printEvenNumbers(10, 2)
printEvenNumbers(4, 15)
// **************************************************************
console.log("Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.")

function power(base, exp = 2) {
  return base ** exp
}
console.log(power(10))
console.log(power(3, 5))
// **************************************************************
console.log("Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.")

function sumNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumNumbers(5))
console.log(sumNumbers(136))
// **************************************************************
console.log("Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).")

function sumOddEvenNumbers(n, m) {
  let sumEven = 0
  let sumOdd = 0 
  for (let i = n; i <= m; i++) {
    if (i % 2 === 0) {
      sumEven += i;
    } else {
      sumOdd += i;
    }
  }  
  console.log('Сумма четных чисел:', sumEven);
  console.log('Сумма нечетных чисел:', sumOdd);
}
sumOddEvenNumbers(5, 25)
// **************************************************************
console.log("Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.")

function findLongestString(strings) {
  if (strings.length == 0) {
    return null;
  }
  let longestString = strings[0];
  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > longestString.length) {
      longestString = strings[i];
    }
  } 
  return longestString;
}
const arr = ['Samsung', 'HP','Abracadabra','Lenovo', 'Asus']
console.log(findLongestString(arr))
const emptyArr = []
console.log(findLongestString(emptyArr))