import faker from 'faker';

let products = '';

for (let i = 0; i < 5; i++){
  const name = faker.commerce.productName();
  products += `<div><h1>${name}</h1></div>`;
}

document.querySelector('#dev-products').innerHTML = products;