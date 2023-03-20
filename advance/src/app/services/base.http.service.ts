import axios from 'axios';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';

const api = axios.create({
  baseURL : 'https://api.escuelajs.co/api/v1',
});

export class BaseHttpService<Tc>{
    //  data:Tc[]=[];
    constructor(
      protected URL: string
    ){}

  async  getAll(){
      const { data } = await api.get<Tc[]>(this.URL);
      return data;
     }

  async update<Tm, TDto>(id:Tm, changes:TDto){
    const { data } = await api.put(`/products/${id}`,changes);
    return data;
  }
}

(async()=>{
  const url1 = '/products';
  const url2 = '/categories';

  const productService = new BaseHttpService<Product>(url1);
    const rta =await productService.getAll();
    productService.update<Product['id'], UpdateProductDto>(1, {
        title: 'asa',

    });

    console.log(rta.length);
  const categoryService = new BaseHttpService<Category>(url2);
    const rta2 =await categoryService.getAll();
    console.log(rta2.length);
})();


// const service = new BaseHttpService<string>()
// service.getAll
// const service1 = new BaseHttpService<Category>()
// service.getAll