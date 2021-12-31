console.log('%c------------------------LEKCJA 81', 'color: red');

// event (e) - parametr

const btn = document.querySelector('button');

const test = (e) => {
	console.log(e);
	console.log(e.target);		/* zwraca po kliknięciu kod targetu, w tym przypadku button */

	console.log(e.target.classList); /* zwraca tablicę z klasami w button po kliknięciu */

	console.log(e.target.offsetTop);	/* zwraca odległość top-top, krawędż przycisku - krawędż viewport */
};

// właściwości target są dostępne po wylistowaniu 

btn.addEventListener('click', test);
