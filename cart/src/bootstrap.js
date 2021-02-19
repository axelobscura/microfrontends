import faker from 'faker';

const cartText = `<div><h1>You have ${faker.random.number()}, items in your cart.</h1></div>`;

document.querySelector('#dev-cart').innerHTML = cartText;