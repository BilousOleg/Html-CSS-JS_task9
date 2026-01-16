// Завдання 1

// Дана строка
const str1 = 'Hello, world!';

// Вивід перевернутої строки з використанням spread оператора та методів масива
// .reverse() для "перегортання" його елементів з кінця на початок, і
// .join('') для стискання вже перегорнутого масива в рядок через '' (тобто без символів)
console.log([...str1].reverse().join(''));

// Замість ... можна було використати .split(''), але він не сприймає деякі символи

// Завдання 2

/**
 * Function gets number and returns its integer part
 * If number is already integer, returns number.
 * Uses Math.trunc()
 * @param {number} floatNumber number to make integer
 * @returns {number | null} number if typeof is number, null if not
 */
function toInteger(floatNumber) {
  return typeof floatNumber === 'number' ? Math.trunc(floatNumber) : null;
}

// Перевірка роботи функції
const number = Math.random() * 100;
console.log(number);
console.log(toInteger(number)); // Якщо передано число
const notANumber = 'qwerty';
console.log(toInteger(notANumber)); // Якщо передано не число

// Аналог - метод Math.trunc(), який і використовується

// Завдання 3

const userName = prompt("Введіть своє ім'я");

// Вивід у модальне вікно за допомогою метода рядка .toUpperCase()
alert(userName.toUpperCase());
