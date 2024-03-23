// 1.Перетворити рядок fruits у масив
const fruits = 'apple banana cantaloupe blueberries grapefruit'.split(' ');


// 2. Використовуючи цикл for, вивести на консоль список елементів з масиву fruits

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 3. Використовуючи цикл while, вивести на консоль список елементів з масиву fruits

let j = 0;
while (j < fruits.length) {
  console.log(fruits[j]);
  j++;
}

// 4. Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits

let k = 0;
do {
  console.log(fruits[k]);
  k++;
} while (k < fruits.length);

// 5. Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits

for (const fruit of fruits) {
  console.log(fruit);
}

// 6. Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < Numbs.length; i++) {
  if (Numbs[i] % 2 === 0) {
    console.log(Numbs[i]);
  }
}

// 7. Додати 'Joker' в кінець масиву names
const names = ['Batman'];
names.push('Joker');
console.log(names);

// 8. Додати 'Joker' на початок масиву names
names.pop();
names.unshift('Joker');
console.log(names);

// 9. Додати 'Catwoman' на початок масиву names, використовуючи метод unshift
let names2 = ['Batman', 'Joker', 'Bane'];
names2.unshift('Catwoman');

console.log(names2);

// 10. Додати 'Catwoman' на початок масиву names, використовуючи оператор ...
let names3 = ['Batman', 'Joker', 'Bane'];
names3 = ['Catwoman', ...names3];

console.log(names3);

// 11. Додати до names елемент 'Catwoman', розмістивши його з індексом 1
let names4 = ['Batman', 'Joker', 'Bane'];
names4.splice(1, 0, 'Catwoman');

console.log(names4); 

// 12. Видалити елементи 'Catwoman' і 'Joker' з масиву names:
let indexToRemove = names4.indexOf('Catwoman');
if (indexToRemove !== -1) {
  names4.splice(indexToRemove, 1);
}

indexToRemove = names4.indexOf('Joker');
if (indexToRemove !== -1) {
  names4.splice(indexToRemove, 1);
}

console.log(names4);

// 13. Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names
const names13 = ['Batman', 'Catwoman', 'Joker', 'Bane'];

temp = names13.indexOf('Catwoman');
if (temp !== -1) {
  
  names13.splice(temp, 1, 'Alfred');
}
temp = names13.indexOf('Joker');
if (temp !== -1) {
 
  names13.splice(temp, 1, 'Alfred');
}
console.log(names13);

//14.

let names14 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
if (!names14.includes('Alfred')) {

  names14.push('Alfred');
}
console.log(names14);

//15.
const names15 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
temp = names15.indexOf('Alfred');
if (temp !== -1) {
 
  names15.splice(indexToRemove, 1);
}

console.log(names15); 




