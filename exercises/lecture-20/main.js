// 1. Створення об'єкту person
let person = {
    name: "Tom Cat",
    age: 3,
    
    // Метод виведення біографічної інформації
    bio: function() {
        console.log(`Name: ${this.name.firstName} ${this.name.lastName}, Age: ${this.age}`);
    },
    
    // Метод представлення себе
    introduceSelf: function() {
        console.log(`Hi! I'm ${this.name.firstName}.`);
    }
};

// Виведення початкових значень властивостей об'єкту person
console.log("Initial properties:");
console.log("Name:", person.name);
console.log("Age:", person.age);

// Зміна типу властивості name
person.name = {
    firstName: "Tom",
    lastName: "Cat"
};

// Виведення оновлених значень властивостей об'єкту person
console.log("Updated properties:");
console.log("Name:", person.name.firstName, person.name.lastName);
console.log("Age:", person.age);

// Виклик методів об'єкту person
console.log("Calling methods:");
person.bio();
person.introduceSelf();

// Функція-шаблон createPerson
function createPerson(name) {
    return {
        name: name,
        introduceSelf: function() {
            console.log(`Hi! I'm ${this.name}.`);
        }
    };
}

// Створення двох екземплярів об'єкта за допомогою createPerson
let person1 = createPerson("Alice");
let person2 = createPerson("Bill");

// Функція-конструктор Person
function Person(name) {
    this.name = name;
    this.introduceSelf = function() {
        console.log(`Hi! I'm ${this.name}.`);
    };
}

// Створення двох екземплярів об'єкта за допомогою конструктора Person
let mary = new Person("Mary");
let tom = new Person("Tom");

// Перевірка наявності властивості prop у об'єкту mary
console.log("Does mary have 'prop' property?", mary.hasOwnProperty("prop"));

//7
let DirtyMartini = {
    // Метод для виведення інгредієнтів англійською мовою
    english_please: function() {
        console.log(`ingredients:
        6 fluid ounces gin
        1 dash dry vermouth (0.0351951ml) 
        1 fluid ounce brine from olive jar
        4 stuffed green olives`);
    },
    
    // Метод для виведення інгредієнтів французькою мовою
    excuse_my_french: function() {
        console.log(`ingrédients:  
        170.4786 ml de gin
        1 trait de vermouth sec (0.0351951ml) 
        28.4131 ml de saumure du pot d'olive
        4 olives vertes farcies`);
    }
};

DirtyMartini.excuse_my_french();
DirtyMartini.english_please();


