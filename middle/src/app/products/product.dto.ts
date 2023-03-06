import { Product } from './product.model';

interface CreateProductDto extends Omit<Product, 'id' | 'createAt' | 'updateAt' | 'category'> {
  categoryId: string
};
type example = Pick<Product, 'color' | 'description'>

interface UpdateProductDto extends Partial<CreateProductDto>{}
type example2 = Required<Product>


export { CreateProductDto, UpdateProductDto }
// type UpdateProductDto = Partial<Product>;

//utility type datos que solo se usan para transferencia
//con omit se omiten campos y con pick con base aun tipo
//yo elijo lo que necesito