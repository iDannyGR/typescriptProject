import {faker} from '@faker-js/faker';

import { Product } from "../models/product.model";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { ProductService } from '../models/product-service.model';

class ProductMemoryService implements ProductService {
  private products : Product[] = [];

   create  (data:CreateProductDto) : Product  {
      const newProduct = {
        ...data,
        id: faker.datatype.number(),
        category:{
          id: data.categoryId,
          name: faker.commerce.department(),
          image: faker.image.imageUrl()
        }
      };

      this.products.push(newProduct);
      return newProduct;
  };

  add (product : Product) {
      this.products.push(product);
      return product;
  }

  update (id:Product['id'], changes:UpdateProductDto):Product  {
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
    this.products[index]={
      ...prevData,
      ...changes
    }
    return this.products[index];
};

 delete (id:string|number) {
  this.products.forEach( (product, index) =>{
        id === product.id ? this.products.splice( index, 1) : null
  });
};

  findOne (id:Product['id']){
   return   this.products.find(item=>item.id === id );
  };
  getAll (){
    return this.products;
};

}


export  {ProductMemoryService}



