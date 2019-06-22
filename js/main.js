console.log('Elo 🚀');

const dynamicElement = document.querySelector('.about__content--js');

if (dynamicElement !== null) {
    dynamicElement.innerHTML = 'Dynamicly injected with JS';
}
