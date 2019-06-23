console.log('Elo 🚀');

const dynamicElement = document.querySelector('.about__content--js');

if (dynamicElement !== null) {
    dynamicElement.innerHTML = 'Dynamicly injected with JS';
}

console.log(calculate(1));

function calculate(x) {
    x = x + 3;
    console.log(`Normal: ${x}`);

    return x * 7;
}

console.log(calculate(2));

const calculateFat = x => (x+3)*7;

console.log(calculateFat(1));
console.log(calculateFat(2));
