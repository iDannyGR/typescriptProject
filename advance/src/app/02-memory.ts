import { ProductMemoryService } from './services/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'producto 2',
  price: 100,
  description: 'hola que hace',
  categoryId: 12,
  images: []
});

const products = productService.getAll();
const productId = products[0].id;
console.log(products)
productService.update(productId,{
  title:'change name'
});

const rta = productService.findOne(productId);
console.log(rta);