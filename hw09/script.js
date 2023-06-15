// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
const numbersDiv = document.querySelector(".numbers");

for (let i = 100; i >= 50; i -= 10) {
  numbersDiv.innerHTML += `<p>${i}</p>`
}

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

const strings = ['Hello', 'World', 'JavaScript', 'Alex'];

const stringsContainer = document.querySelector('.strings_container');

for (let i = 0; i < strings.length; i++) {
    stringsContainer.innerHTML += `<p>${strings[i]}</p>`
}


// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const users = [
  {
    first_name: "Sergej",
    last_name: "Sergeev",
    age: 35,
  },
  {
    first_name: "Ivan",
    last_name: "Ivanov",
    age: 23,
  },
  {
    first_name: "Petr",
    last_name: "Petrov",
    age: 15,
  },
  {
    first_name: "Sidor",
    last_name: "Sidorov",
    age: 18,
  },
  {
    first_name: "Andrej",
    last_name: "Andreev",
    age: 48,
  },
  {
    first_name: "Semen",
    last_name: "Semenov",
    age: 12,
  },
];

let section = document.querySelector("section");

for (let i = 0; i < users.length; i++) {
  if (users[i].age > 18) {
    section.innerHTML += `<div class="users_container">
                            <p>${users[i].first_name}</p>
                            <p>${users[i].last_name}</p>
                            <p>${users[i].age}</p>       
                        </div>`;
  }
}
