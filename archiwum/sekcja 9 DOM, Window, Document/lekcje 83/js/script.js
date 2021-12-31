console.log('%c------------------------LEKCJA 83', 'color: red');
// stopPropagation, addEventListener

// const lime = document.querySelector('.lime');
const blue = document.querySelector('.blue');
const gold = document.querySelector('.gold');

// const infoLime = () => {
// 	console.log('%clime', 'color: lime; text-transform: uppercase');
// };

const infoBlue = () => {
	console.log('%cten kod nie miał się teraz wykonać', 'color: royalblue; text-transform: uppercase');
};

const infoGold = (e) => {
	e.stopPropagation()				/* zatrzymuje fazę bąbelkowania na tym elemencie */
	console.log('%cwykonuję jakiś kod', 'color: gold; text-transform: uppercase');
};

// FAZA bąbelkowania - bubbling - FAZA DOMYŚLNA

// lime.addEventListener('click', infoLime);
blue.addEventListener('click', infoBlue);
gold.addEventListener('click', infoGold);

// dodanie w CSS na elemencie: pointer-events: none; powoduje niewykonanie kodu listenera na tym elemencie