// SEKCJA 9

console.log('%c------------------------LEKCJA 72', 'color: red');

// stare metody pobierania elementów

// getElementById

const test = document.getElementById('item');

console.log(test);

// getElementsByTagName

const test2 = document.getElementsByTagName('li');

console.log(test2);

// getElementsByClassName

const test3 = document.getElementsByClassName('test');
console.log(test3);

console.log('%c------------------------LEKCJA 73', 'color: red');

// nowe metody pobierania elementów (ES6)
// targetujemy tak samo jak w CSS, przez tagi, klasy, id, pseudoklasy lub pseudoelementy

// querySelector

const test4 = document.querySelector('li');
// const test4 = document.querySelector('ul li');
// const test4 = document.querySelector('#item')
console.log(test4);

const ulList = document.querySelector('ul');
console.log(ulList);

const liItem = ulList.querySelector('li');
console.log(liItem);

console.log('%c------------------------', 'color: gold');

// querySelectorAll

const liItems = document.querySelectorAll('li');
// const liItems = document.querySelectorAll('li.test');
console.log(liItems);

console.log('%c------------------------WAŻNE', 'color: green');

// żywe kolekcje, czyli qSA vs getElementsByTag / ClassName
// używane w 1% przypadków, elementy dodawane dynamicznie

const newLi = document.createElement('li');
ulList.appendChild(newLi).textContent = 'dodatkowy LI';

console.log(liItems);
console.log(liItems.length);
console.log(test2);
console.log(test2.length);
console.log(
	ulList
); /* użycie ulList pokazuje żywy tag li pomimo zastosowania querySelector*/

// powyższy przykład pokazuje, że na żywych elementach powinniśmy używać starych metod: liItems - querySelector; test2 - getElementsByTag

console.log('%c------------------------LEKCJA 74', 'color: red');
// ZADANIE

const heading = document.querySelector('h1');
console.log(heading);

const arrPTag = document.querySelectorAll('p');
console.log(arrPTag);

const divArr = document.querySelector('div.test');
console.log(divArr);

const divP = divArr.querySelector('p#test');
console.log(divP);
