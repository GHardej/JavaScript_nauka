console.log('%c------------------------LEKCJA 88', 'color: red');
// Zadanie 2

const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const square = document.querySelector('.square');

const hello = () => console.log('Cześć!');

const redSquare = () => (square.style.backgroundColor = 'red');
const blueSquare = () => (square.style.backgroundColor = 'royalblue');
const showClass = () => {
	p1.classList.toggle('show');
	p2.classList.toggle('show');
};

btn1.addEventListener('dblclick', hello);
btn2.addEventListener('click', showClass);
square.addEventListener('mouseenter', redSquare);
square.addEventListener('mouseleave', blueSquare);
