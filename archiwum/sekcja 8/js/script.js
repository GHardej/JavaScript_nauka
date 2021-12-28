// SEKCJA 8: FUNKCJE
// deklaracja funkcji - hoisting, czyli automatyczne wynoszenie deklaracji funkcji na sam początek skryptu

function test() {
	console.log('cześć');
}

test();

// wyrażenie funkcyjne - zachowana jest struktura, deklaracja pozostaje na swoim miejscu, brak hoistingu

const helloWorld = function () {
	console.log('cześć! 123');
};

helloWorld();

// funkcja z argumentami

/* funkcja definiowana z użyciem parametru */
function add(parametr) {
	console.log(`Podany argument to: ` + parametr);
}

add(test); /* funkcja wywołana z użyciem argumentu */
// parametr = argument
// parametr podajemy podczas deklaracji funkcji
// argument podajemy podczas wywołania funkcji

function add(x, y) {
	// console.log(x + y);
	return x + y;
	// console.log(x + y);
}

add(5, 3);
// map() zwraca nam nową tablicę, z którą możemy pracować, tak samo return zwraca nam wartość, z której możemy w przyszłości skorzystać
// return kończy działanie funkcji, kod napisany po nim nie zostanie wywołany

// funkcja z zastosowaniem uproszczonej instrukcji if
function add2(x, y) {
	if (x < y) return;
	console.log(x + y);
}

add2(5, 10); /*warunek spełniony - funkcja nic nie zwróci ze względu na return*/
add2(15, 10); /*warunek niespełniony - funkcja wywołuje dalszą część kodu*/

function hello(n, a) {
	console.log(`Cześć, mam na imię ${n} i mam ${a} lat`);
}

hello('Greg', 41);

console.log('%c------------------------LEKCJA 61', 'color: red');
// FUNKCJA ANONIMOWA
const heading = document.querySelector('h1');

// heading.addEventListener('click', function() {
// 	console.log('Kliknięto mnie!');
// })

/*funkcja bez nazwy, niemożliwa do wykorzystania w innym miejscu, lepiej powyższy kod zapisać jak poniżej*/

function test() {
	console.log('Kliknięto mnie!');
}

heading.addEventListener('click', test);

console.log('%c------------------------LEKCJA 62', 'color: red');
// FUNKCJA STRZAŁKOWA

const arrowFunction = () => {};

function test(name) {
	console.log(`Mam na imię ${name}`);
}

test('Klaudia');

const test2 = (name) => {
	console.log(`Mam na imię ${name}`);
};

test2('Lisa');

const test3 = (name) => console.log(`Mam na imię ${name}`);
test3('Greg');

const test4 = (name, age) => console.log(name, age);
test4('name', 123);

console.log('%c------------------------', 'color: gold');

function add3(num1, num2) {
	return num1 + num2;
}

const add4 = (num1, num2) => num1 + num2;
console.log(add4(2, 3));

// const add4 = (num1,num2) => {return num1 + num2} - nie musimy dawać return jeżeli wykonujemy jedną operację oraz bez nawiasów klamrowych, poniżej przykład z dwiema operacjami

const add5 = (num1, num2) => {
	console.log('Cześć');
	return num1 * num2;
};

console.log(add5(5, 6));

console.log('%c------------------------', 'color: gold');

const days = ['poniedziałek', 'wtorek', 'środa'];

const days2 = days.forEach(function (day) {
	console.log(day);
});
// lepszy i równoważny zapis poniżej

const days3 = days.forEach((day) => console.log(day));

const arr = [1, 2, 'b', 4, 5, 6, 7];

const newArr = [1, 2, 'b', 4, 5, 6, '7a'];
// const newArr = arr.map((item) => item * 3);
// console.log(newArr);

newArr.forEach((item) => console.log(item));

newArr.forEach((item) => {
	isNaN(item)
		? console.log(newArr.indexOf(item) + `: ${item} is a string`)
		: console.log(newArr.indexOf(item) + `: ${item} is a number`);
});

newArr.map((item) => {
	isNaN(item)
		? console.log(`${item} is a string`)
		: item % 2 === 0
		? console.log(`Liczba ${item} jest parzysta`)
		: console.log(`Liczba ${item} jest nieparzysta`);
});

/*
const multiply = (x, y, z) => x * y * z;
console.log(multiply(2, 3, 4));

const test5 = (x, y) => {
	return x + y;
};
console.log(test5(1, 2));
*/

console.log('%c------------------------LEKCJA 63', 'color: red');

// LEKCJA 63 - domyślne parametry funkcji
/*skróty klawiaturowe:
nfn - wywołuje funkcję strzałkową
*/

const hello2 = (name = 'drogi użytkowniku') => {
	console.log(`Cześć ${name}, jak się masz?`);
};

hello2();
hello2('Klaudia');

const add6 = (x = 5, y = 10) => {
	console.log(x + y);
};

add6();
add6(10);

console.log('%c------------------------LEKCJA 64', 'color: red');

// LEKCJA 64, operator REST
// SPREAD
const arr2 = [1, 2, 3, 4];
console.log(arr2);
console.log(...arr2);

// REST

const numbers = (x, y, ...z) => {
	console.log(x, y, z);
	console.log(z);
	console.log(z.map((el) => el * 2));
};

numbers(13, 15, 87, 65, 9898, 65656, 'az', 87);
// w wyniku zastosowania operatora REST pod parametrem z tworzy się tablica z argumentami, które wykraczają poza parametr 'z'

console.log('%c------------------------LEKCJA 65', 'color: red');

// ZAKRESY

const name = 'Lily';

const test10 = () => {
	const name = 'Lisa';

	// const test2 = () => {
	//     console.log(car);
	// }
	// test2()

	const test3 = () => {
		let car = 'Audi';
	};
	test3();
};
test10();

console.log('%c------------------------LEKCJA 67', 'color: red');
// ZADANIE 1

// let score;

const add7 = (a, b) => {
	score = a + b;
	score % 2 === 0 ? even() : odd();
};

const even = () => console.log(`Liczba ${score} jest parzysta`);

const odd = () => console.log(`Liczba ${score} jest nieparzysta`);

add7(13, 18);

console.log('%c------------------------', 'color: gold');

const add8 = (a, b) => {
	score = a + b;
	score % 2 === 0 ? even2(score) : odd2(score);
};

const even2 = (num) => console.log(`Liczba ${num} jest parzysta`);

const odd2 = (num) => console.log(`Liczba ${num} jest nieparzysta`);

add7(10, 16);

console.log('%c------------------------LEKCJA 68', 'color: red');
// ZADANIE 2

// let celsius;
// let temp;
const fahrenheit = (celsius) => {
	temp = celsius * 1.8 + 32;
	console.log(`${celsius} C = ${temp} F`);
};

fahrenheit(20);

console.log('%c------------------------LEKCJA 69', 'color: red');
// ZADANIE 3

const num3 = 10;
const numbers2 = [];

for (let i = 0; i < num3; i++) {
	numbers2.push(i);
}

const check = numbers2.forEach((p) => {
	p === 0 ? console.log(`${p} jest niepodzielne`) :
	p % 3 === 0
		? console.log(`${p} jest podzielne przez 3`)
		: console.log(`${p} nie jest podzielne przez 3`);
});
