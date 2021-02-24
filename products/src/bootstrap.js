import faker from 'faker';

const mount = (el) => {
  let products = '';

  for(let i = 0; i < 5; i++){
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
  }

  el.innerHTML = products;
}
// Context / situation 1
// Definitely with an id of 'dev-products' will exist
if(process.env.NODE_ENV === 'development'){
  const el = document.querySelector('#dev-products');

  if(el){
    mount(el);
  }
}

// Context / situation 2
// No guarantee that an element with an id of 'dev-products' will exist
export {mount};

