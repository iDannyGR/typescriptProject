import {User, ROLES} from './enum'

const currentUser: User = {
  username: 'danyel',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = ()=>{
  return currentUser.role === ROLES.ADMIN ? true : false;
}
export const checkRole = (role1:string, role2:string)=>{
  return currentUser.role === role1 ?? role2 ? true : false;
}
export const checkRoleV2 = (roles: string[])=>{
  return roles.includes(currentUser.role) ? true : false;
}
export const checkRoleV3 = (...roles: string[])=>{
  return roles.includes(currentUser.role) ? true : false;
}

console.log(checkAdminRole())
console.log(checkRole(ROLES.ADMIN, ROLES.SELLER))
console.log(checkRoleV2([ROLES.ADMIN, ROLES.SELLER]))
console.log(checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER))

// EL PARAMETRO REST ... PERMITE A UNA FUNCION RECIBIR UN NUMERO
//INDEFINIDO DE ARGUMENTOS COMO UN ARREGLO ARRAY EJEMPLO FUNCION CHECKROLE 3