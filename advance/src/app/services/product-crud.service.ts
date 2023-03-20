import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { ProductHttpService } from "./product.http2.service";

export class ProductCrudService{
    private url  = '/products';
    private http = new ProductHttpService(this.url);

    async update (id:Product['id'], changes:UpdateProductDto){
        return this.http.update(id, changes)
    }
}