import {faker} from '@faker-js/faker';

import { Product } from "./product.model";
import { CreateProductDto, UpdateProductDto } from "./product.dto";

const products : Product[] = [];

const addProduct = (data:CreateProductDto) : Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    category:{
      id: data.categoryId,
      name: faker.commerce.department(),
      createAt: faker.date.recent(),

      updateAt: faker.date.recent(),
    }
  };

  products.push(newProduct);
  return newProduct;
};
const deleteProduct = (id:string|number) => {
    products.forEach( (product, index) =>{
          id === product.id ? products.splice( index, 1) : null
    });
};

const updateProduct = ((id:string|number, changes:UpdateProductDto):Product => {
    const index = products.findIndex(item => item.id === id);
    const prevData = products[index];
    products[index]={
      ...prevData,
      ...changes
    }
    return products[index];
});

const getProduct = ((id:string|number, changes:Product) => {

});


export  { addProduct, products ,updateProduct};