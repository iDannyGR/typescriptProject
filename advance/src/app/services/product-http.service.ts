import axios from 'axios';

import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";

const api = axios.create({
  baseURL : 'https://api.escuelajs.co/api/v1',
});

class PruductHttpService implements ProductService{

  async getAll() {
      const { data } = await api.get<Product[]>('/products');
      return data;
  }
  async update(id: Product['id'], changes: UpdateProductDto) {
     const { data } = await api.put(`/products/${id}`,changes);
     return data;
  }
 async create(dto: CreateProductDto) {
    const { data } = await api.post('/products',dto);
    return data;
  }
  async findOne(id: Product['id']){
    const { data } = await api.get(`/products/${id}`);
    return data;
  }

}

export {PruductHttpService}