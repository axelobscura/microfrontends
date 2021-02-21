import faker from 'faker';

let products = '';

for (let i = 0; i < 5; i++){
  const name = faker.commerce.productName();
  products += `<div><h3>${name}</h3></div>`;
}

document.querySelector('#dev-products').innerHTML = products;

const mount = (el) => {
  let products = '';

  for(let i = 0; i < 5; i++){
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
  }

  ReactDOM.render(<App />, el);
}
// Context / situation 1
// Definitely with an id of 'dev-products' will exist
if(ProcessingInstruction.env.NODE_ENV === 'development'){
  const el = document.querySelector('#dev-products');

  if(el){
    mount(el);
  }
}

// Context / situation 2
// No guarantee that an element with an id of 'dev-products' will exist
export {mount};
