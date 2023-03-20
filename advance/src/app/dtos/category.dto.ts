import { AccessType, Category } from "../models/category.model";
import { IsEnum, IsNotEmpty, IsUrl } from 'class-validator'

interface ICreateCategoryDto extends Omit<Category, 'id'> {}
class CreateCategoryDto implements ICreateCategoryDto{
        name!:string;

        @IsUrl(4,140)
        @IsNotEmpty()
        image!: string;
        @IsNotEmpty()
        @IsEnum(AccessType)
        access?: AccessType | undefined;
}
