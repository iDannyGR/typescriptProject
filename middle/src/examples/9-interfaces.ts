type Sizes = 'S'|'M'|'L'|'XL';
type userId = string | number;

interface Product  {
  id: userId;
  title: string;
  createAt:Date;
  stock:number;
  size:Sizes
}
//una interface se puede extender un type no
const products: Product[]= [];

products.push({
  id:'1',
  title:'p1',
  createAt: new Date(),
  stock:90,
  size:"S"
})

const addProduct = (data:Product) => {
  products.push(data);
};