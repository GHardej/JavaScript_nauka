// const btn1 = document.querySelector('button:nth-of-type(1)');
// const btn2 = document.querySelector('button:nth-of-type(2)');
// const btn3 = document.querySelector('button:nth-of-type(3)');

/*
const btns = document.querySelectorAll('button');

// console.log(btn1, btn2, btn3);

function btnMsg(e) {
	console.log(`Kliknięto ${e.target.textContent} !`);
}

// btn1.addEventListener('click', btnMsg);
// btn2.addEventListener('click', btnMsg);
// btn3.addEventListener('click', btnMsg);

btns.forEach((btn) => btn.addEventListener('click', btnMsg));
*/

// METODY
console.log('%c------------------------LEKCJA 48', 'color: red');

const numbers = [1, 2, 3, 4, 5];

numbers.unshift(100, 200, 'abcd');
console.log(numbers);

numbers.shift();
console.log(numbers);

// unshift - dodaje elementy na początku tablicy
// shift - usuwa element z indeksem 0
// metody powyższe zmieniają indeksację w tablicy, rzadko używane

const colors = ['red', 'green', 'blue'];
console.log(colors);

// push - dodaje elementy na końcu tablicy METODA DESTRUKCYJNA
colors.push('gold', 123);
console.log(colors);

// pop - usuwa ostatni element tablicy METODA DESTRUKCYJNA
colors.pop();
console.log(colors);
console.log('%c------------------------LEKCJA 49', 'color: red');

// map() - podobne do forEach()
const numbers2 = [1, 2, 3, 4, 5];

function multiply(x) {
	return x * 2;
	// console.log(x * 2);
}

// multiply(3)

const newNumbers = numbers2.map(multiply);
console.log(numbers2);
console.log(newNumbers);

// map():
// - podobna do pętli, wykonuje jakiś kod na każdym elemencie tablicy
// - w nawiasach podajemy nazwę funkcji (callback), któej kod ma się wykonać na elementach tablicy
// - zwraca nową tablicę
console.log('%c------------------------', 'color: gold');

const numbers3 = [1, 2, 3, 4, 5];
const abc = ['a', 'b', 'c'];
const newAbc = numbers3.concat(6, 7, 8, true, abc);

console.log(newAbc);
console.log(numbers3);
console.log('%c------------------------', 'color: gold');

// ... spread operator, (w funkcjach jest to rest operator)

console.log(abc);
console.log(...abc);

const drinks = ['pepsi', 'kawa', 'sok'];
const meals = ['schabowy', 'spaghetti', 'zupa'];

const menu = [...drinks, ...meals];
console.log(menu);

const menu2 = drinks.concat(meals);
console.log(menu2);

// spread operator działa jak concat, ale jest prostszy w użyciu, rozsmarowywuje tak, że mamy dostęp do każdej właściwości
console.log('%c------------------------LEKCJA 50', 'color: red');

/*
slice() – metoda niedestrukcyjna:
pierwszy argument – indeks elementu, od którego wycinamy (włącznie),
drugi argument – indeks elementu, do którego wycinamy (ale bez tego elementu).

splice() – metoda destrukcyjna
pierwszy argument – indeks elementu, od którego wycinamy (włącznie),
drugi argument – ilość elementów, które wycinamy,
każdy kolejny argument – nowy element, który chcemy dodać do tablicy w miejsce wyciętego.

Uwaga! Zarówno przy slice jak i splice, nie musimy podawać wszystkich argumentów. Jeden też zadziała.
*/

const numbers4 = [0, 0, 1, 1, 2, 2, 2];
const colors2 = ['red', 'green', 'blue', true, 123];
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀'];

const numbers5 = numbers4.slice(0, 2);
console.log(numbers5);

const numbers6 = numbers4.slice(-3);
console.log(numbers6);

console.log('%c------------------------', 'color: gold');

// console.log(colors2);
const randomStuff = colors2.splice(-2);
console.log(colors2);
console.log(randomStuff);

console.log('%c------------------------', 'color: gold');

const newCars = cars.splice(2, 4, 'test');
console.log(cars);
console.log(newCars);

console.log('%c------------------------LEKCJA 52', 'color: red');

const numbers7 = [0, 23, 48, 175, 2, 34, 11];

function number(x) {
	return x % 2 === 0;
}
// callback - funkcja, którą przekazujemy jako argument do innej funkcji
console.log(numbers7.filter(number));

function number2(x) {
	return x > 30;
}
console.log(numbers7.filter(number2));

numbers7.forEach((num) => console.log(num + 2));

console.log(numbers7.includes(23));
console.log(numbers7.indexOf(23));
// jeżeli tablica nie zawiera jakiegoś elementu to zwróci -1
console.log(numbers7.indexOf(235));

console.log('%c------------------------LEKCJA 53', 'color: red');

// WRÓCIĆ PO SKOŃCZENIU CAŁEGO KURSU

const numbers8 = [0, 1, 2, 3];

const newNumbers2 = numbers8.forEach((num2) => console.log(num2 * 2));
console.log(newNumbers2);
// forEach nic nie zwraca, w związku z tym tablica jest pusta

const mapNumbers = numbers8.map((num2) => num2 * 2);
console.log(mapNumbers);
// metoda map zwraca tablicę z wynikiem działania

console.log('%c------------------------LEKCJA 54 - zadanie 1', 'color: red');

const letters = ['c', 'd'];

letters.unshift('a', 'b');
letters.push('e', 'f');
console.log(letters);

console.log('Tablica zawiera literę c: ', letters.includes('c'));

console.log('%c------------------------LEKCJA 55 - zadanie 2', 'color: red');

const numbers9 = [1, 2, 3, 4, 5, 6];
const meals2 = ['pierogi', 'rosół', 'schabowy', 'burger'];

const menu3 = numbers9.concat(meals2);
console.log(menu3);

const menu4 = [...numbers9, ...meals2];
console.log(menu4);

console.log('%c------------------------LEKCJA 56 - zadanie 3', 'color: red');

const numbers10 = [1, 5, 13, 26, 48];

const newNumbers10 = numbers10.map((number10) => number10 * 5);

console.log(newNumbers10);

for (const number of newNumbers10) {
	if (number % 2 === 0) {
		console.log(`Liczba parzysta: ${number}`);
	} else {
		console.log(`Liczba nieparzysta: ${number}`);
	}
}

console.log('%c-------------------alternatywa', 'color: gold');

newNumbers10.map((number) => {
	number % 2 === 0
		? console.log(`Liczba parzysta ${number}`)
		: console.log(`liczba nieparzysta ${number}`);
});

console.log('%c------------------------LEKCJA 57 - zadanie 4', 'color: red');

const arr = ['red'];

arr.unshift('blue');
arr.push('green');

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	console.log(`Mój ulubiony kolor to: ${arr[i].toUpperCase()}`);
}

console.log('%c-------------------', 'color: gold');

for (let i = 0; i < arr.length; i++) {
	console.log(
		`Mój ulubiony kolor to: %c${arr[i]}`,
		'text-transform: capitalize'
	);
}

console.log('%c-------------------alternatywa', 'color: gold');

for (let i = 0; i < arr.length; i++) {
	console.log(
		`Mój ulubiony kolor to: ${arr[i].charAt(0).toUpperCase() + arr[i].slice(1)}`
	);
}

console.log('%c------------------------LEKCJA 58 - zadanie 5', 'color: red');

const text = 'Audi,Mercedes,BMW,Nissan,Dodge';
const textArr = text.split(',');

console.log(textArr);

textArr.length > 3 ? console.log('Jest OK') : console.log('Nie jest OK');

const found = textArr.find((element) => element == 'Audi');

console.log(found);

found == 'Audi' ? textArr.push('VW') : textArr.pop();

console.log(textArr);

console.log('%c-------------------alternatywa', 'color: gold');

if (textArr.includes('Audi')) {
	textArr.push('Opel');
} else {
	textArr.pop();
}
console.log(textArr);