import  { PruductHttpService } from './services/product-http.service';

(async()=>{
  const ProductService = new PruductHttpService();

  console.log('--- - '.repeat(10));
  const products = await ProductService.getAll();
  console.log(products.length);


  const productId = products[0].id;
  await ProductService.update(productId, {
    title: 'numero title',
    price: 1000,
    description:'new descriptions'
  })
  console.log(products[0]);
})();
