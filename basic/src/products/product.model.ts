 type Sizes = 'S'|'L'|'M'|'XL';
 type Product = {
  title:string,
  createAt: Date,
  stock: number,
  size?:Sizes
};

export {Sizes, Product}
