// PĘTLE

// if (){}
// switch (){}

// for (){} zapis identyczny do instrukcji warunkowych

// for (let i = 0; i <= 3; i++) {
// 	console.log(i);
// }

const animals = ['pies', 'lis', 'niedźwiedź', 'nietoperz'];

// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);
// console.log(animals[3]);

for (let i = 0; i < animals.length; i++) {
	console.log(animals[i]);
}

// PĘTLA While
/*
let i = 0;

while (i < 5) {
	i++;
	console.log(i);
}
*/
// PĘTLA do while

let i = 0;

do {
	i++;
	console.log(i);
} while (i < 5);

console.log('-----------------');

// PĘTLA for of

const numbers = [1, 2, 3, 4, 5];

// zapis sprzed ES6 - używamy kiedy chcemy pracować z indexami, wybrać konkretny index z tablicy
/*
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i] * 2);
}
*/

// zapis wprowadzony przez ES6

for (const number of numbers) {
	console.log(number * 2);
}

// ZADANIE 1 - lekcja 42

const city = ['Warszawa', 'Radom', 'Kraków', 'Wrocław'];

for (let i = 0; i < city.length; i++) {
	console.log('To miasto nazywa się: ', city[i]);
}

console.log('---------------------');

// inny zapis
for (let i = 0; i < city.length; i++) {
	console.log(`To miasto nazywa się: ${city[i].toUpperCase()}`);
}

console.log('---------------------');

// ZADANIE 2 - Lekcja 43

let x = 0;

while (x < 10) {
	x += 2;
	console.log(x);
}
console.log('---------------------');

// ZADANIE 3 - lekcja 44

x = 20;

do {
	x -= 3;
} while (x > 0);

console.log(x);

console.log('-----------------');
console.log('-----------------');

// ZADANIE 4 - lekcja 45

const array = [5, 8, 10, 23, 48, 60];

for (const item of array) {
	console.log(item / 5);
}
console.log('-----------------');

for (const item of array) {
	// let modulo = item % 2;
	if ((item % 2) === 0) {
		console.log(
			`%cLiczba ${item} jest parzysta`,
			'background-color: gold; color: black; font-size: 16px'
		);
	} else {
		console.log(
			`%cLiczba  ${item} jest nieparzysta`,
			'background-color: tomato; color: black; font-size: 16px'
		);
	}
}

console.log('-----------------');

for (const item of array) {
	let newItem = item / 5;
	// let modulo = newItem % 2;
	if ((newItem % 2) > 0) {
		console.log(
			`%cLiczba  ${newItem} jest nieparzysta`,
			'background-color: tomato; color: black; font-size: 16px'
		);
	} else {
		console.log(
			`%cLiczba ${newItem} jest parzysta`,
			'background-color: gold; color: black; font-size: 16px'
		);
	}
}
