const alert = document.querySelector('.alert');
// 1. Знайти на сторінці кнопку з класом btn-primary.
// Призначте знайденому елементу подію onclick.
// Написати функцію обробки події onclick, що додає CSS - клас alert - primary до елемента з id = alert
// та змінює значення властивості textContent цього елемента на "A simple primary alert—check it out!".

let primaryButton = document.querySelector('.btn-primary');

if (primaryButton) {    
    primaryButton.onclick = function() {
        let alertElement = document.getElementById('alert');
        if (alertElement) {
            alertElement.classList.add('alert-primary');
            alertElement.textContent = "A simple primary alert—check it out!";
        }
    };
}

// 2. Знайти на сторінці кнопку з класом btn-secondary. 
// Додати до кнопки прослуховувач події "click".
// Написати функцію обробки події click, що додає CSS - клас alert - primary до елемента з id = alert 
// та змінює значення властивості textContent цього елемента на "A simple secondary alert—check it out!"

let secondaryButton = document.querySelector('.btn-secondary');

if (secondaryButton) {
    secondaryButton.addEventListener('click', function() {
        
        let alertElement = document.getElementById('alert');
         if (alertElement) {
            alertElement.classList.add('alert-primary');
            alertElement.textContent = "A simple secondary alert—check it out!";
        }
    });
}
// 3. Знайти на сторінці кнопку з класом btn-success.
//  Додати до кнопки прослуховувач події "mouseover".
// Написати функцію обробки події mouseover, що додає CSS - клас alert - success до елемента з id = alert
// та змінює значення властивості textContent цього елемента на "A simple success alert—check it out!"

const successButton = document.querySelector('.btn-success');
if (successButton) {
    successButton.addEventListener('mouseover', function() {
        const alertElement = document.getElementById('alert');
        if (alertElement) {
            alertElement.classList.add('alert-success');
            alertElement.textContent = "A simple success alert—check it out!";
        }
    });


// Додати до кнопки прослуховувач події "mouseout".
// Написати функцію обробки події mouseout, що видаляє CSS - клас alert - success з елемента alert
//та змінює значення властивості textContent цього елемента на пустий рядок.
    successButton.addEventListener('mouseout', function() {
        const alertElement = document.getElementById('alert');
        if (alertElement) {
            alertElement.classList.remove('alert-success');
            alertElement.textContent = "";
        }
    });
}

//4. Знайти на сторінці кнопку з класом btn-danger.
// Додати до кнопки прослуховувач події "focus".
// Написати функцію обробки події focus, що додає CSS - клас alert - danger до елемента з id = alert
// та змінює значення властивості textContent цього елемента на "A simple danger alert—check it out!"
// Додати до кнопки прослуховувач події "focusout".
// Написати функцію обробки події focusout, що видаляє CSS - клас alert - danger з елемента alert
//та змінює значення властивості textContent цього елемента на пустий рядок.

const dangerButton = document.querySelector('.btn-danger');

if (dangerButton) {
    dangerButton.addEventListener('focus', function() {
        const alertElement = document.getElementById('alert');
        if (alertElement) {
            alertElement.classList.add('alert-danger');
            alertElement.textContent = "A simple danger alert—check it out!";
        }
    });

   
    dangerButton.addEventListener('focusout', function() {
        const alertElement = document.getElementById('alert');
        if (alertElement) {

            alertElement.classList.remove('alert-danger');
            alertElement.textContent = "";
        }
    });
}

// 5. Знайти на сторінці кнопки з класом btn-dark та btn-light.
//  Написати функцію toggleMode, що перемикає клас «dark - mode» елемента document.body за допомогою методу classList.toggle().
// Одночасно при перемиканні класу dark - mode потрібно приховувати або показувати відповідну кнопку.
//Якщо ввімкнено режим dark - mode, показати кнопку btn - light та сховати кнопку dark - mode,
// і навпаки, якщо вимкнено режим dark - mode, показати кнопку btn - dark та сховати кнопку btn - light
 

const darkButton = document.querySelector('.btn-dark');
const lightButton = document.querySelector('.btn-light');


if (darkButton && lightButton) {
    
    darkButton.addEventListener('click', toggleMode);
    lightButton.addEventListener('click', toggleMode);
}

function toggleMode() {
   
    document.body.classList.toggle('dark-mode');
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (darkButton && lightButton) {
      
        if (isDarkMode) {
            darkButton.style.display = 'none';
            lightButton.style.display = 'inline-block';
        } else {
            darkButton.style.display = 'inline-block';
            lightButton.style.display = 'none';
        }
    }
}

//6. Знайти на сторінці кнопку з класом btn-info.
// Додати до кнопки прослуховувач події "keypress"
//Написати функцію обробки події keypress, що перевіряє, чи є натиснута клавіша, клавішею "Enter".
//Якщо це так, типову дію події потрібно скасовувати за допомогою методу event.preventDefault().
//Після скасування дії за замовчуванням, додати CSS - клас alert - info до елемента з id = alert
//та змінити значення властивості textContent цього елемента на "A simple info alert—check it out!";
// Знаходимо кнопку з класом btn-info

const infoButton = document.querySelector('.btn-info');

if (infoButton) {       
    infoButton.addEventListener('keypress', function(event) {       
          if (event.key === 'Enter') {            
            event.preventDefault(); 
              const alertElement = document.getElementById('alert');
              if (alertElement) {
                  alertElement.classList.add('alert-info');
                  alertElement.textContent = "A simple info alert—check it out!";
            }
        }
    });
}
//7. Знайти на сторінці всі селектори .card.
//Використовуючи цмкл for, вивести на консоль вміст кожного елемента з класом.card - title

let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    
    let cardTitle = cards[i].querySelector('.card-title');
 
    if (cardTitle) {
        console.log(cardTitle.textContent);
    }
}

//8. Знайти на сторінці всі селектори .card.
// Використовуючи цикл for, знайти для кожного елемента.card кнопку з класом.add - to - cart,
// додати для кожної кнопки обробник події click, що викликає функцію, яка виводить на консоль вміст кожного елемента з класом.card - title
// Знаходимо всі елементи з класом .card
 cards = document.querySelectorAll('.card');

// Перебираємо кожен елемент з класом .card
for (let i = 0; i < cards.length; i++) {
    
    const addToCartButton = cards[i].querySelector('.add-to-cart');
   
    const cardTitle = cards[i].querySelector('.card-title');

    if (addToCartButton && cardTitle) {
        
        addToCartButton.addEventListener('click', function() {
           
            console.log(cardTitle.textContent);
        });
    }
}
