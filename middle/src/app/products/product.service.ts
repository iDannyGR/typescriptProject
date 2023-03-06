import {faker} from '@faker-js/faker';

import { Product } from "./product.model";
import { CreateProductDto, UpdateProductDto, FindProductDto } from "./product.dto";

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

const updateProduct = ((id:Product['id'], changes:UpdateProductDto):Product => {
    const index = products.findIndex(item => item.id === id);
    const prevData = products[index];
    products[index]={
      ...prevData,
      ...changes
    }
    return products[index];
});

const findProduct = (dto:FindProductDto):Product[] => {
    //code filter
    // dto.color='blue';
    // dto.tags?.pop();
    return products;
};


export  { addProduct, products ,updateProduct, findProduct};


//el tipado por indice se realiza como la linea 32 de tipo
// Product['id'], de esta manera se obtiene el tipado colocado de la interfaz al elemento

//ReadOnlyArray evita el mutado del array, por ejemplo cuando se hace push se modica
