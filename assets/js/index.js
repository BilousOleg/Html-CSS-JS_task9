// Завдання 1

// Дана строка
const str1 = 'Hello, world!';

// Вивід перевернутої строки з використанням spread оператора та методів масива
// .reverse() для "перегортання" його елементів з кінця на початок, і
// .join('') для стискання вже перегорнутого масива в рядок через '' (тобто без символів)
console.log([...str1].toReversed().join(''));
console.log(str1); // Перевірка рядка (не змінюється, без мутацій)

// Замість ... можна було використати .split(''), але він не сприймає деякі символи

// Завдання 2

/**
 * Function gets number and returns its integer part
 * If number is already integer, returns number.
 * @param {number} floatNumber number to make integer
 * @returns {number | null} number if typeof is number, null if not
 */
function toInteger(floatNumber) {
  return typeof floatNumber === 'number'
    ? Number(floatNumber.toFixed(0))
    : null;
}

// Якщо портібно саме ВІДКИНУТИ дробову частину

/**
 * Function gets number and returns its integer part.
 * If number is already integer, returns number.
 * @param {number} floatNumber number to make integer
 * @returns {number | null} number if typeof is number, null if not
 */
function toIntegerString(floatNumber) {
  return typeof floatNumber === 'number'
    ? Number(floatNumber.toString().split('.')[0])
    : null;
}

// Перевірка роботи функції
const number = Math.random() * 100;
console.log(number);
console.log(toInteger(number)); // Якщо передано число
console.log(toIntegerString(number)); // Якщо передано число
const notANumber = 'qwerty';
console.log(toInteger(notANumber)); // Якщо передано не число
console.log(toIntegerString(notANumber)); // Якщо передано не число

// Аналог - метод Math.trunc()

// Завдання 3

const userName = prompt("Введіть своє ім'я");

if (typeof userName === 'string') {
  // Вивід у модальне вікно за допомогою метода рядка .toUpperCase()
  alert(userName.toUpperCase());
}

// Завдання 4

/**
 * Function gets string date in format 'year-day-month' and changes it to 'day.month.year'
 * @param {string} date date string to change
 * @returns {string} date with changed format
 */
function changeDateFormat(date) {
  const dateArray = date.split('-'); // перетворення рядка на масив елементів, виключаючи символ '-'
  dateArray.push(dateArray.shift()); // вирізання першого елемента масиву і додавання його в кінець
  return dateArray.join('.'); // повернення рядка як стисненого через символ '.' масиву
}

const date = '2021-22-09';

// Приклад використання
console.log(changeDateFormat(date));

// Завдання 5

/**
 * Function gets two strings and compares them despite the difference in registers
 * @param {string} str1 first comparand
 * @param {string} str2 second comparand
 * @returns {boolean}
 */
function isEqual(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase(); // Порівняння рядків в нижньому регістрі (можна й у верхньому - різниці немає)
}

// Перевірка роботи функції
console.log(isEqual('pApA', 'papa')); //true
console.log(isEqual('qwerty', 'QWErty')); //true
console.log(isEqual('aaa', 'EEE')); //false
