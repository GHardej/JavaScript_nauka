console.log('%c------------------------LEKCJA 97', 'color: red');

// ZADANIE 2
const liItems = document.querySelectorAll('li');
const ulList = document.querySelector('ul');
console.log(liItems);

// liTags.forEach((liTag) => {}) nie ma tutaj zastosowania

for (let i = 0; i < liItems.length; i++) {
	liItems[i].textContent = i + 1;
	liItems[i].setAttribute('data-ID', `${i + 1}`);
}

// alternatywne rozwiązanie za pomocą pętli for ... of
// let number = 1;
// for (const liItem of liItems) {
// 	liItem.textContent = number;
// 	liItem.dataset.id = number;
// 	number++;
// }

const liItem3 = ulList.querySelector('[data-id="3"]');
console.log(liItem3);

console.log(liItem3.closest('.wrapper'));
