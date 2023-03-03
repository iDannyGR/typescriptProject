import { Product } from './../products/product.model';
import { User } from '../users/users.model';
import { BaseModel } from '../base.model';

interface Order extends BaseModel{
  products: Product;
  user: User
}

export  { Order }