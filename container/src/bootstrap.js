import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('Container!!!');

productsMount(document.querySelector('#dev-products'));
cartMount(document.querySelector('#my-cart'));