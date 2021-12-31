console.log('%c------------------------LEKCJA 89', 'color: red');

// SETTIMEOUT & SETINTERVAL

// const test = () => {
// 	console.log('test');
// };

// czas w milisekundach
// setTimeout(test, 2000);
// setInterval(test, 1000);

console.log('%c------------------------LEKCJA 90', 'color: red');

// STRICT MODE

('use strict');

const colors = ['red', 'blue', 'green'];

for (const color of colors) {
	console.log(color);
}

console.log('%c------------------------LEKCJA 91', 'color: red');

// ALERT, CONFIRM & PROMPT

// obecnie rzadko się korzysta z alert
// alert('Witaj!!')

// if (confirm('Chcesz pizzę?')) {
// 	console.log('OK');
// } else {
// 	console.log('nie to nie');
// }

// prompt('Cześć, jak masz na imię?')
// const name = prompt('Cześć, jak masz na imię?', 'Grzegorz');
// console.log(`Cześć ${name}`);

console.log('%c------------------------LEKCJA 92', 'color: red');
// Obiekt MATH

console.log(Math);

console.log(Math.max(5, 10));
console.log(Math.min(5, 10));
console.log(Math.PI);

// metoda random - losowe liczby domyślnie 0 - 1, żeby zwiększyć zakres mnożymy przez 10, 100 itd.
console.log(Math.random() * 10);

// MATH.FLOOR - metoda, która zwraca liczbę całkowitą
const number = Math.floor(Math.random() * 100);
console.log(number);

console.log('%c------------------------LEKCJA 93', 'color: red');
// ATRYBUTY -

const link = document.querySelector('a');
const img = document.querySelector('img');
const p = document.querySelector('p');

// ustawienie atrybutu: atrybut, zawartość
link.setAttribute('href', '#');
link.setAttribute('target', '_blank');

// pobranie atrybutu
console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt'));

// sprawdzenie czy tag posiada atrybut
console.log(p.hasAttribute('style'));

// usunięcie atrybutu z DOM
p.removeAttribute('style');

console.log('%c------------------------LEKCJA 94', 'color: red');
// DATA-ATRYBUTY

const div = document.querySelector('div');
console.log(div);
const div2 = document.querySelector('[data-number="123"]');
console.log(div2);
console.log('%c-------------------', 'color: gold');
console.log(div2.dataset);
console.log(div2.dataset.number);
console.log(
	div2.dataset.moreInfo
); /* pomimo zdefiniowania atrybutu: more-info, tutaj zapisujemy go w camelCase */

// dodanie nowego data atrybutu
div2.setAttribute('data-test', '123');
// lub inaczej, atrybut color:
div2.dataset.color = 'blue';

console.log('%c------------------------LEKCJA 95', 'color: red');
// RELACJE RODZINNE

const grandpa = document.querySelector('.grandparent');
console.log(grandpa.querySelector('.parent'));
console.log(grandpa.querySelectorAll('.child'));

console.log('%c-------------------', 'color: gold');

const middleChild = document.querySelector('.middle-child');

// A: żeby dostać się do elementu, który jest poprzednim rodzeństwem:
const prevSibling = middleChild.previousElementSibling;
console.log(prevSibling);

// B: żeby dostać się do elementu, który jest następnym rodzeństwem:
const nextSibling = middleChild.nextElementSibling;
console.log(nextSibling);

// C: żeby dostać się do elementu, który jest rodzicem naszego dziecka:
const parent = middleChild.parentElement;
console.log(parent);


// D: żeby dostać się do elementu, który jest dziadkiem naszego dziecka:
const grandpa2 = middleChild.parentElement.parentElement;
console.log(grandpa2);

// E: żeby dostać się do elementu, który jest pradziadkiem naszego dziecka (w tym przypadku tag body):
const grandpa3 = middleChild.parentElement.parentElement.parentElement;
console.log(grandpa3);

// metody D i E nieczytelne, nie korzystamy, poniżej lepsza metoda
console.log(middleChild.closest('.grandparent')); 

// najczęściej korzysta się z closest i parentElement
