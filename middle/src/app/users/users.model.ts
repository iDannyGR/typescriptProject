import { BaseModel } from "../base.model";

enum ROLES {   //los enums van nombrados en mayusculas
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}
//los enums siven para definir mas explcitamente las opciones
//de tipado o un set de opciones predefinidas
interface User extends BaseModel{
  username: string;
  role: ROLES;
}

export { ROLES, User }