/*
const firstName = 'Grzegorz';
const age = 41;
const dish = 'sushi';

console.log(firstName);
console.log(age);
console.log(dish);

const Age = 12;
console.log(Age);

console.log(
	'Cześć, jestem ' + firstName + ' i moim ulubionym daniem jest ' + dish
);

console.log(`Cześć, jestem ${firstName} i moim ulubionym daniem jest ${dish}!`);

// ZADANIE 1

const petName = 'Lusio';

console.log(`Cześć, jestem ${firstName}, a to jest ${petName} - mój pies.`);

const petAge = 2;

console.log(petName + ' ma już ' + petAge + ' lata!');
*/

// ZADANIE 2

/*
const firstName = 'Tomek';
let age = 12;
age = 18;

const favColor = 'niebieski';
const favMeal = 'schabowy';

let currentCar;
currentCar = 'Audi';

let firstName1 = 'Ania';
let age2 = 24;
let favColor2 = 'czerwony';
*/

/*
const text = '123';
console.log(typeof text);

const quote = 'Jegomość powiedział -"kocham schabowe!"'
console.log(quote);

const msg = 'to jest testowa wiadomość'
console.log(msg.length);
console.log(msg.toUpperCase());

const newMsg = msg.toUpperCase()
console.log(newMsg);
console.log(newMsg.toLowerCase());

// 04.02.2000
// 02/04/2000

const date = new Date()
console.log(date);
console.log(date.toLocaleDateString('pl'));
console.log(date.toLocaleDateString('en'));

const username = 'maciej'
console.log(username.slice(1));
const newUsername = username.charAt(0).toUpperCase() + username.slice(1)
console.log(newUsername);
*/

// ZADANIE 3

/*
    Metody do wykorzystania:
    charAt()
    includes()
    replace()* podchwytliwe 🙂 
    slice()
    split()
    toLowerCase()
    toUpperCase()
*/

/*
// 1
const text1 = 'powiększ mnie!';

console.log(text1.toUpperCase());

// 2
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI';

console.log(text2.toLowerCase());

// 3
const text3 = '$#%#^ wytnij te dziwne znaki na początku!';

const searchTerm = 'wytnij';

const indexOfTerm = text3.indexOf(searchTerm);

// console.log(indexOfTerm);

console.log(text3.slice(indexOfTerm));

// 4
const text4 = 'sprawdź, czy zawieram słowo "czy"';

const searchString = 'czy';

console.log(
	'%cWynik sprawdzenia:',
	'color: gold',
	text4.includes(searchString)
);

// 5
const text5 =
	'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"';

const searchTerm2 = 'L';
const indexOfFirst = text5.indexOf(searchTerm2);
// console.log(indexOfFirst);

console.log('%cRozwiązanie:', 'color: red', text5.charAt(indexOfFirst));

// 6
const text6 = 'pies zamień każde słowo pies, na słowo kot pies';

const searchTerm3 = 'pies';
const replaceTerm = 'kot';

console.log(text6.replaceAll(searchTerm3, replaceTerm));

// 7
const text7 = 'podziel, ten, string, od, przecinków';

const words = text7.split(', ');
console.log(words);
*/

// TYP: NUMBER
const num1 = 23
const num2 = '45'

console.log(num1 + num2);
console.log(num2 *1);

const num4 = 1235.456
console.log(num4.toFixed(2));

const num5 = '123'
console.log(parseInt(num5));

// TYP BOOLEAN
if (false) {
	console.log('TRUE');
} else {
	console.log('FALSE');
}

// TYP ZŁOŻONY
const colors = ['red', 'green', 'blue']
console.log(colors);

function test() {
	console.log('Cześć, jestem w funkcji! ');
}
test()

const person = {
	name: 'Klaudia',
	age: 23,
	favColor: null
}
console.log(person);