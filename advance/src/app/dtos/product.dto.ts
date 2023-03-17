import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id'];
};


interface UpdateProductDto extends Partial<CreateProductDto>{};
type example2 = Required<Product>;


export { CreateProductDto, UpdateProductDto }