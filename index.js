console.log('funguju!');

let cislo = 1
const kostka = document.querySelector('.dice')
const otoceniKostky = () => {
	cislo = cislo + 1
	if (cislo === 7) {
		cislo = 1
	}
	kostka.src = `img/side${cislo}.svg`
}
document.addEventListener('keydown', otoceniKostky)