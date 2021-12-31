console.log('%c------------------------LEKCJA 84', 'color: red');
// Delegacja zdarzeń

/* nazwa klasy bez kropki!!! żywe kolekcje są aktualizowane, tworzy HTMLCollection */
// const allCircles = document.getElementsByClassName('circle');

const gold = document.querySelector('.gold');
const lime = document.querySelector('.lime');

const newCircle = document.createElement('div');
newCircle.classList.add('circle', 'purple');
gold.append(newCircle);

/* twotrzy NodeList */
const allCircles = document.querySelectorAll('.circle');
/* żeby pobrać wszystkie elementy z klasą .circle zmienną definiujemy po utworzeniu elementu w JS, gdyż w przeciwieństwie do getElementsByClassName, querySelectorAll nie aktualizuje żywych kolekcji*/

/* forEach nie działa na HTMLCollection, które jest tworzone przez getElementsByClassName, działa na NodeList tworzonym przez querySelectorAll */

// allCircles.forEach((circle) =>
// circle.addEventListener('click', () => console.log(circle))
// );

// console.log(allCircles.length);

// e.target zwraca element, który kliknęliśmy i porównujemy czy zawiera porządaną klasę

// lime.addEventListener('click', (e) => {
// 	if (e.target.matches('.circle2')) console.log(e.target);
// });

// alternatywne rozwiązanie, klasa bez kropki
lime.addEventListener('click', (e) => {
	if (e.target.classList.contains('circle2')) console.log(e.target);
});

// w delegacji zdarzeń pobieramy rodzica (lime), nadajemy na rodzicu listenera, w funkcji anonimowej listenera dodajemy if'a i wtedy sprawdzamy co klikamy, a następnie jeżeli klikniemy to w co chcieliśmy kliknąć wykonujemy wtedy kod
