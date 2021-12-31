console.log('%c------------------------LEKCJA 96', 'color: red');

// ZADANIE 1

const img = document.querySelector('img');
img.setAttribute('src', 'https://pixabay.com/get/g77d9cf614c9c46c2999722561f5beb7cb80ae470135823949862f087fba2b571d00c9371127b9a1f55bed9976ea56e8605c4ca80b0d5133c90eaf3f847ee8ef6ca15d9dae56d17d788b9a6f39effa467_640.jpg');
img.setAttribute(
	'alt',
	'Sylwester, wznosimy toast za pomyślność w Nowym 2022 Roku!!'
);

const toast = () =>
	console.log('Wznieśmy toast za pomyślność Nowego Roku, a.d. 2022');
setTimeout(toast, 3000);
