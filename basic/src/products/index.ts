import {addProduct, calcStock, products} from './product.service'



addProduct({
  title: 'mi producto',
  createAt: new Date(),
  stock:15
})

addProduct({
  title: 'mi producto 2',
  createAt: new Date(),
  stock:6,
  size:'XL'
})
console.log(products, calcStock())
