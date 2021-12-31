console.log('%c------------------------LEKCJA 86', 'color: red');
// Add, remove & toggle class

const addBtn = document.querySelector('.add');
const removeBtn = document.querySelector('.remove');
const toggleBtn = document.querySelector('.toggle');
const pTag = document.querySelector('p');

const addClass = () => {
	pTag.classList.add('test');
};

addBtn.addEventListener('click', addClass);
removeBtn.addEventListener('click', () => pTag.classList.remove('test'));
toggleBtn.addEventListener('click', () => pTag.classList.toggle('test'));

