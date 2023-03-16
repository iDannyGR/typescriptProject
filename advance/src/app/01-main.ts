import axios from 'axios';

import { Product } from './models/product.model';

const api = axios.create({
  baseURL : 'https://api.escuelajs.co/api/v1',
});


(async()=>{
async function getProducts(): Promise<Product[]> {
  const { data } = await api.get<Product[]>('/products');
  return data;
}

  const products = await getProducts()
  console.log(products.map(item => item.title))

})()