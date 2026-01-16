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
