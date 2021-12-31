console.log('%c------------------------LEKCJA 82', 'color: red');
// bubbling & capturing, addEventListener

const lime = document.querySelector('.lime');
const blue = document.querySelector('.blue');
const gold = document.querySelector('.gold');

const infoLime = () => {
	console.log('%clime', 'color: lime; text-transform: uppercase');
};
const infoBlue = () => {
	console.log('%cblue', 'color: royalblue; text-transform: uppercase');
};
const infoGold = () => {
	console.log('%cgold', 'color: gold; text-transform: uppercase');
};

// FAZA bąbelkowania - bubbling - FAZA DOMYŚLNA
// lime.addEventListener('click', infoLime);
// blue.addEventListener('click', infoBlue);
// gold.addEventListener('click', infoGold);

// addEventListener działa w fazie bubbling, wyświetla po kolei wszystkie elementy: gold, blue, lime

// faza capturing (przechwytywania)

// lime.addEventListener('click', infoLime, {once:true});	/* w nawiasach klamrowych podajemy opcje wywołania listenera, w tym wypadku mamy opcję jednokrotnego wywołania, więcej kliknięć nie wywoła tego listenera */

// FAZA przechwytywania - capture
// lime.addEventListener('click', infoLime, {capture:true}); 
// blue.addEventListener('click', infoBlue, {capture:true});
// gold.addEventListener('click', infoGold, {capture:true});

// włączenie fazy - capture & bubbling
lime.addEventListener('click', infoLime, {capture:true}); 
blue.addEventListener('click', infoBlue,);
gold.addEventListener('click', infoGold,);
