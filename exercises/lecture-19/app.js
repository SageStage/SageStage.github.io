//1
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

let areLengthsEqual = str1.length === str2.length;
let areEqualLoose = str1 == str2;
let areEqualStrict = str1 === str2;

console.log("Довжина рядків str1 і str2: ", areLengthsEqual);
console.log("Рядки str1 і str2 рівні (небрежне порівняння): ", areEqualLoose);
console.log("Рядки str1 і str2 рівні (строге порівняння): ", areEqualStrict);

//2
let string5 = 'Hello World';
let firstChar = string5[0];
console.log(firstChar);


firstChar = string5.charAt(0);
console.log(firstChar); 

//3
let str3 = "Hello Javascript";
let charaJ = str3.charAt(6);
console.log(charaJ);

//4
let lastIndex = str3.length - 1;
let lastChar = str3[lastIndex];
console.log(lastChar);

lastChar = str3.charAt(lastIndex);
console.log(lastChar);

//5
function lastCharFun(str) {
    return str.charAt(str.length - 1);
}

function lastCharFun(str) {
    return str[str.length - 1];
}

function lastCharFun(str) {
    return str.slice(-1);
}

//6
let a = 'When candles are out,';
let b = 'all cats are grey.';
let result = a.concat(' ', b);
console.log(result);

//7
let fact = "Fifteen is the same as";
 a = 5;
 b = 10;
fact += " " + (a + b);
console.log(fact);

//8

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

let firstName = "Tom";
let lastName = "Cat";

console.log(getFullName(firstName, lastName));

//9
function greeting(firstName, lastName) {
    let fullName = getFullName(firstName, lastName);
    return "Hello, " + fullName + "!";
}
console.log(greeting(firstName, lastName));

//10
function greeting2(firstName, lastName) {
    let fullName = getFullName(firstName, lastName);
    return "<div><h1>Hello, " + fullName + "!</h1></div>";
}
let temp = greeting2(firstName, lastName);
console.log(temp);

//11
let string1 = "  The name of our game  ";

console.log(string1.trim());
console.log(string1.trimStart());
console.log(string1.trimEnd());

const phoneNumber = '\t  555-123\n ';

console.log(phoneNumber.trim());
console.log(phoneNumber.trimStart());
console.log(phoneNumber.trimEnd());

//12
let sentence = 'Always look on the bright side of life';

let containsLookUp = sentence.includes('look up');
console.log("Чи містить рядок 'look up':", containsLookUp);

let containsLookOn = sentence.includes('look on');
console.log("Чи містить рядок 'look on':", containsLookOn);

let containsLookOnFromIndex8 = sentence.includes('look on', 8);
console.log("Чи містить рядок 'look on' починаючи з 8-ї позиції:", containsLookOnFromIndex8);

//13
let indexL = sentence.indexOf('l');
console.log("Індекс символу 'l':", indexL);

let indexLFrom3rdPosition = sentence.indexOf('l', 3);
console.log("Індекс символу 'l' починаючи з 3-ї позиції:", indexLFrom3rdPosition);

let indexCapitalL = sentence.indexOf('L');
console.log("Індекс символу 'L':", indexCapitalL);

//14
let subString1 = sentence.substring(6);
console.log(subString1);

let subString2 = sentence.substring(0, 6);
console.log(subString2);

let subString3 = sentence.substring(6, 10);
console.log(subString3); 

//15
let usernameRegex = /^[a-z0-9_-]{8,16}$/i;

//16
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//17
function truncateText1(text) {
    return text.substring(0, 50);
}
function truncateText2(text) {
    return text.substr(0, 50);
}
let sentence17 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
console.log(truncateText1(sentence17));
console.log(truncateText2(sentence17)); // Виведе перші 50 символів тексту






