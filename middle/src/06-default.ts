export const createProduct = (
  id:string | number,
  stock:number =10, //se asignan los parametros por defecto en la variable
  isNew:boolean = true
)=>{
   return{id, stock, isNew};
};


console.log(createProduct(1,12, true));
console.log(createProduct(1));
console.log(createProduct(1,0, false));