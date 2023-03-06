import { Product } from './product.model';

interface CreateProductDto extends Omit<Product, 'id' | 'createAt' | 'updateAt' | 'category'> {
  categoryId: string
};
type example = Pick<Product, 'color' | 'description'>

interface UpdateProductDto extends Partial<CreateProductDto>{};
type example2 = Required<Product>;

interface FindProductDto extends Readonly<Partial<Omit <Product, 'tags'>>>{
   readonly tags : ReadonlyArray<string>;
};


export { CreateProductDto, UpdateProductDto, FindProductDto }
// type UpdateProductDto = Partial<Product>;

//utility type datos que solo se usan para transferencia
//con omit se omiten campos y con pick con base aun tipo
//yo elijo lo que necesito
//Partial Toma como entrada un tipo y convierte todas sus propiedades en opcionales
//ReadONly permite que los parametros sean de solo lectura