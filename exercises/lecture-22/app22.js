const classes = ['first', 'second', 'third', 'fourth'];

// 1. Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір.
//    Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.

const h1Elements = document.getElementsByTagName('h1');
console.log(typeof h1Elements); // тип отриманого об'єкту
console.log(h1Elements.length); // розмір отриманого об'єкту

// Вивести на консоль кожний елемент з отриманого об'єкту за допомогою циклу for
for (let i = 0; i < h1Elements.length; i++) {
    console.log(h1Elements[i]);
}


// 2. Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1.
//    Встановити для нього стиль background - color = "gold"

const p1Element = document.querySelector('#p1');
p1Element.style.backgroundColor = "gold";

// 3. Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2. 
//    Встановити для нього стилі background - color: gold; color: blue; font - size: 2rem;

const p2Element = document.querySelector('#p2');
p2Element.style.backgroundColor = "gold";
p2Element.style.color = "blue";
p2Element.style.fontSize = "2rem";

// 4. Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3. Призначити для нього клас third

const p3Element = document.querySelector('#p3');
p3Element.classList.add('third');

// 5. Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4.
//    Призначити для нього класи fourth та border

const p4Element = document.querySelector('#p4');
p4Element.classList.add('fourth', 'border');

// 6. Знайти всі елементи з класом container. 
// Використовуючи цикл for, вивести на консоль перший елемент для кожного зі знайдених елементів.

const containerElements = document.querySelectorAll('.container');
for (let i = 0; i < containerElements.length; i++) {
    console.log(containerElements[i].firstElementChild);
}

// 7. Знайти всі елементи з класом container.
// Використовуючи цикл for, вивести на консоль вміст першого елементу для кожного першого елемента зі знайдених елементів.

for (let i = 0; i < containerElements.length; i++) {
    console.log(containerElements[i].firstElementChild.innerHTML);
}
//8. Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers.
//   Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1

const headers = document.querySelectorAll('.container header');
const tags = ['h1', 'h2', 'h3', 'h4'];
headers.forEach((header, index) => {
    const newHeader = document.createElement(tags[index]);
    newHeader.innerHTML = header.firstElementChild.innerHTML;
    newHeader.id = header.firstElementChild.id;
    newHeader.classList = header.firstElementChild.classList;
    header.replaceChild(newHeader, header.firstElementChild);
});

// Використовуючи цикл for для колекції headers та масив classes, додати до отриманих тегів-заголовків класи

headers.forEach((header, index) => {
    const newClass = classes[index];
    header.firstElementChild.classList.add(newClass);
});
