import axios from 'axios';
const api = axios.create({
  baseURL : 'https://api.escuelajs.co/api/v1',
});


(async()=>{
async function getProducts(){
  const promise: Product[] = await api.get('/products');
  return promise.data;
}

  const products = await getProducts()
  console.log(products)

})()