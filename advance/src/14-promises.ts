import axios from 'axios';
const api = axios.create({
  baseURL : 'https://api.escuelajs.co/api/v1',
});


(async()=>{
  function delay(time: number) {
    const promise = new Promise<boolean>((res, rej)=>{
       setTimeout(()=>{
        res(true)
       }, time)
    })
    return promise;
  }
async function getProducts(){
  const promise = await api.get('/products');
  return promise.data;
}

  console.log('------'.repeat(10));
  const rta = await  delay(500);
  console.log(rta);
  const products = await getProducts()
  console.log(products)

})()