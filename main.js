"use strict";
// 1. Создание простой телефонной книги:

// Создайте объект для хранения контактов телефонной книги. Каждый контакт должен иметь свойства: name, email, phone. Напишите функции для добавления, удаления и поиска контактов.
// const phoneBook = {};

// addContact(phoneBook, { name: "Иван", email: "ivan@example.com", phone: "+1234567890" });
// addContact(phoneBook, { name: "Петр", email: "petr@example.com", phone: "+9876543210" });
let phoneBook = {
  name: [],
  email: [],
  phone: [],
};

function addContacts(book, contact) {
  book.name.push(contact.name);
  book.email.push(contact.email);
  book.phone.push(contact.phone);
}

addContacts(phoneBook, {
  name: "Иван",
  email: "ivan@example.com",
  phone: "+1234567890",
});
console.log(phoneBook);

// console.log(phoneBook);

// Expected Output:
// {
//   "Иван": {
//     "name": "Иван",
//     "email": "ivan@example.com",
//     "phone": "+1234567890"
//   },
//   "Петр": {
//     "name": "Петр",
//     "email": "petr@example.com",
//     "phone": "+9876543210"
//   }
// }

// 2)
// Нахождение максимального элемента в массиве:

// // Входные данные: [1, 2, 3, 4, 5]
// // Ожидаемый вывод: 5
// Задание: Напишите функцию findMax(numbers), которая возвращает максимальный элемент массива numbers.
const arr = [1, 2, 3, 4, 5];
function findMax(numbers) {
  let maxNum = numbers[0];
  for (let number of numbers) {
    if (maxNum < number) {
      maxNum = number;
    }
  }
  return maxNum;
}
console.log(findMax(arr));

// 3) Удаление повторяющихся элементов из массива:

// // Входные данные: [1, 2, 3, 2, 4, 5, 1]
// // Ожидаемый вывод: [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3, 2, 4, 5, 1];
function uniqueNumbers(arr) {
  let newUniqArr = [];
  for (let num of arr) {
    if (!newUniqArr.includes(num)) {
      newUniqArr.push(num);
    }
  }
  return newUniqArr;
}
console.log(uniqueNumbers(arr2));
// Задание: Напишите функцию removeDuplicates(numbers), которая удаляет повторяющиеся элементы из массива numbers.

// 4. Преобразование массива с помощью функции map:

// Входные данные:

const numbers = [1, 2, 3, 4, 5];
function squareNumbers(arr) {
  let newArr = [];
  arr.map(function (elem) {
    newArr.push(elem ** 2);
  });
  return newArr;
}
console.log(squareNumbers(numbers));
// Ожидаемый вывод:

// [1, 4, 9, 16, 25]
// Задание: Напишите функцию squareNumbers(numbers), которая преобразует массив numbers, возводя каждый элемент в квадрат и возвращая результирующий массив.

// 5. Отслеживание ошибки с помощью блока try-catch:

// Входные данные:
const number = 10;

// Ожидаемый вывод:

// Error: NaN
// Задание: Напишите код, который использует блок try-catch для отслеживания ошибки деления на ноль и выводит сообщение об ошибке "Error: NaN" в случае возникновения ошибки.

// 6.Пользовательский ввод и проверка ошибок:
// Задание: Напишите код, который запрашивает у пользователя его имя с помощью prompt() и выводит сообщение об ошибке "Введенное значение не является числом", если пользователь вводит не число.
let person = prompt("Please enter your number");
if (person != number) {
  alert("This is not number!");
}
