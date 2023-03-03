import { Product } from "./product.model";

const products : Product[] = [];

const addProduct = (data:Product) => {
  products.push(data);
};
const deleteProduct = (id:string|number) => {
    products.forEach( product =>{
      
    })
};
const updateProduct = ((id:string|number, changes:Product) => {

};
const getProduct = ((id:string|number, changes:Product) => {

};


export  { addProduct, products };