enum ROLES {   //los enums van nombrados en mayusculas
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}
//los enums siven para definir mas explcitamente las opciones
//de tipado o un set de opciones predefinidas
type User = {
  username: string;
  role: ROLES;
}

const systemUser: User = {
    username: 'sofia',
    role: ROLES.ADMIN
}

export {User, ROLES}

