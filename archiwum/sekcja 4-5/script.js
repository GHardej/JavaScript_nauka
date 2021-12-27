/*
if (!(10 === '10')) {
	console.log('TRUE');
} else {
	console.log('FALSE');
}
*/

/*
const pass = '34ref34r3e4';
const char = '!';

if (pass.length > 10 && pass.includes(char)) {
	console.log('Masz rewelacyjne hasło');
} else if (pass.length > 10) {
	console.log('Masz dobre hasło');
} else {
	console.log('Masz za krótkie hasło');
}
*/

// SWITCH
/*
const day = 'środa';

switch (day) {
	case 'poniedziałek':
		console.log('Dziś jest poniedziałek');
		break;
	case 'wtorek':
		console.log('Dziś jest wtorek');
		break;
	case 'środa':
		console.log('Dziś jest środa');
		break;
	case 'czwartek':
		console.log('Dziś jest czwartek');
		break;
	case 'piątek':
		console.log('Dziś jest piątek');
		break;
	default:
		console.log('Weekend!!!');
}
*/

// OPERATORY WARUNKOWE

/*
const x = 100

if (x > 20) {
	console.log(`${x} > 20`);
} else {
	console.log(`${x} < 20`);
}

// wartość ? TRUE : FALSE

const newX = x > 20 ? `${x} > 20` : `${x} < 20`
console.log(newX);
*/

// ---------------------------------------

/*
const isLoggedIn = true

function loggedIn() {
	console.log('Użytkownik jest zalogowany!');
}

function loggedOut() {
	console.log('Użytkownik nie jest zalogowany!');
}

if (isLoggedIn) {
	loggedIn()
} else {
	loggedOut()
}

// zapis rónoważny

isLoggedIn ? loggedIn() : loggedOut()
*/

// ZADANIE - lekcja 32
/*
const x = 50;
const y = 30;

if (x > y) {
	console.log(`${x} jest większe niż ${y}`);
}
*/

// ZADANIE - Lekcja 33

/*
const color = 'blue'
const newColor = 'green'

if (color === newColor) {
	console.log('Kolory zgadzają się.');
} else {
	console.log('Kolory nie zgadzają się.');
}
*/

// ZADANIE 3
/*
const x = 100;
const y = 100;

if (x > y) {
	console.log('x>y');
} else if (x === y) {
	console.log('x=y');
} else {
	console.log('x<y');
}
*/
// ZADANIE 4
/*
const promo = '20%';

switch (promo) {
	case '10%':
		console.log(`Dziś mamy ${promo} zniżki!`);
		break;
	case '20%':
		console.log(`Dziś mamy ${promo} zniżki!`);
		break;
	case '30%':
		console.log(`Dziś mamy ${promo} zniżki!`);
		break;
	default:
		console.log(`Dziś mamy najlepsze promocje!`);
}
*/

// ZADANIE 5
/*
let x = 12;

const newX = x % 2

// const newX = x % 2 == 0 ? console.log('Liczba jest parzysta') : console.log('Liczba jest nieparzysta');

// console.log(newX);

newX == 0
	? console.log('Liczba jest parzysta')
	: console.log('Liczba jest nieparzysta');

	console.log(newX);
*/

// ZADANIE 6 - lekcja 37

const x = 50;
let text;

/*
if (x >= 100) {
	console.log('x >= 100'.toUpperCase());
} else if (x < 100 && x > 30) {
	console.log('x jest średniakiem'.toUpperCase());
} else {
	console.log('x jest mały'.toUpperCase());
}
*/

// ZASADA DRY - don't repeat yourself
if (x >= 100) {
	text = 'x >= 100';
} else if (x < 100 && x > 30) {
	text = 'x jest średniakiem';
} else {
	text = 'x jest mały';
}
console.log(text.toUpperCase());
