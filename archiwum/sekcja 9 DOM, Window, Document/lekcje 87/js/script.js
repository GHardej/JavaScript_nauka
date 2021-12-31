console.log('%c------------------------LEKCJA 87', 'color: red');

// const body = document.querySelector('body');
const ulList = document.createElement('ul');

document.body.append(ulList);
const number = 10;

// zmienna liItem definiujemy wewnątrz pętli!!!

for (let i = 1; i <= number; i++) {
	// console.log(`${i}`);
	const liItem = document.createElement('li');
	ulList.append(liItem);
	// liItem.append(`${i}`);
	liItem.textContent = i;
}

const lastLi = ulList.querySelector('li:last-child');

console.log(lastLi);

// lastLi.innerHTML = 'Jestem ostatnim elementem.';
lastLi.textContent = 'Jestem ostatnim elementem.';

lastLi.style.backgroundColor = 'royalblue';
lastLi.style.padding = '20px 40px';
lastLi.style.fontSize = '48px';
