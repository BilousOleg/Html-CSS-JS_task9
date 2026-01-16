/**
 * Function gets number and returns its integer part
 * If number is already integer, returns number.
 * Uses Math.trunc()
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
 * Uses Math.trunc()
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
