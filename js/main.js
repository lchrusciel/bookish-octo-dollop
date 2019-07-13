const hello = (name, age) => {
    console.log(`Hello ${name}, you are ${age} years old`)
};

const user1 = 'Elon';
const user2 = 'Jeff';

const age = 40;

hello('John', 23);
hello(user1, age);
hello(user2, 23);

let toggle = document.querySelector('.navigation-menu-toggle__button--js');
let navigation = document.querySelector('.navigation--js');

toggle.addEventListener('click', () => {
    navigation.classList.toggle('navigation--visible-js');
});
