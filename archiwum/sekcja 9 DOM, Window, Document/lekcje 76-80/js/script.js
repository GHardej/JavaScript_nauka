console.log('%c------------------------LEKCJA 76', 'color: red');

const ulList2 = document.createElement('ul');
const liItem2 = document.createElement('li');
liItem2.textContent = 'Cześć!';

document.body.appendChild(ulList2); /*dodajemy tag w sekcji body w html*/
ulList2.appendChild(liItem2);

const div1 = document.querySelector('div');

const pTag = document.createElement('p');
div1.appendChild(pTag);

const h1Tag = document.createElement('h1');
div1.appendChild(h1Tag);

const table = document.querySelector('table');
const trTag = document.createElement('tr');
const tdTag = document.createElement('td');
table.appendChild(trTag);
trTag.appendChild(tdTag);

tdTag.textContent = 'Komórka';
div1.textContent = 'Div w JS';

console.log('%c------------------------LEKCJA 77', 'color: red');

// append & appendChild

const div2 = document.querySelector('.lesson77');

div2.append(
	h1Tag,
	pTag,
	'Tekst dodany w JS'
); /* niemożliwe jest dodanie kilku elementów przy pomocy appendChild oraz tekstu, wprowadzono nowe append*/

console.log('%c------------------------LEKCJA 78', 'color: red');

// textContent, innerText, outerHtml, innerHtml

const btn = document.querySelector('button');

console.log(btn.outerHTML);
console.log(btn.innerHTML);

// btn.outerHTML = '123' /*zastąpi tag i zawartość tekstem 123 */

// btn.innerHTML = ''	/* usuwa zawartość tagu */
// document.body.innerHTML = '' /* usuwa całą zawartość sekcji body */

// btn.innerHTML = '<li>123</li>'

// z innerHTML korzystamy wówczas kiedy my wprowadzamy treść, nie robimy tego kiedy to użytkownik wprowadza gdyż narażamy się na ataki

console.log(btn.innerText);
console.log(btn.textContent);

// innerText zwraca tylko tekst
// textContent ignoruje wszystkie style oraz tagi

console.log('%c------------------------LEKCJA 79', 'color: red');
//  usuwanie elementów ze strony
const div3 = document.querySelector('.lesson79');
const p123 = div3.querySelector('p');

// removeChild - odwołujemy się do rodzica, z którego usuwamy dziecko

// div3.removeChild(p123);

// remove - wywołujemy na elemencie, który chcemy usunąć

div3.remove();

console.log('%c------------------------LEKCJA 80', 'color: red');

// addEventListener
// target.addEventListener(type, listener)

const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');



// unikamy funkcji anonimowy, staramy się pisać zwykłe funkcje, które można wykorzystać w innych miejscach kodu
const test = () => {
	console.log('double click!');
};

btn1.addEventListener('click', function () {
	console.log('Kliknięto mnie!');
});
btn2.addEventListener('mouseover', () => console.log('najechano na mnie'));
btn3.addEventListener('dblclick', test);

// listenery trzymamy na samym dole kodu

const btns = document.querySelectorAll('button')
console.log(btns);

const smile = () => {
	console.log(':)');
}

btns.forEach(btn => btn.addEventListener('click', smile))

console.log('%c------------------------LEKCJA 81', 'color: red');
