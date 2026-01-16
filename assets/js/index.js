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
