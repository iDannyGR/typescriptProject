import axios from 'axios';

import { Product } from './models/product.model';

const api = axios.create({
  baseURL : 'https://api.escuelajs.co/api/v1',
});


(async()=>{
async function getProducts(): Promise<Product[]> {
  // const rta = await api.get<Product[]>('/products');
  const { data } = await api.get<Product[]>('/products')
  // const data = rta.data as Product[] para forzar tipado
  return data;
}
// se pueden realizar las consultas
  const products = await getProducts()
  console.log(products.map(item => item.title))

})()