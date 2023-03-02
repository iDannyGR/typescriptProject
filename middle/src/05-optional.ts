export const createProduct = (
  id:string | number,
  stock?:number,
  isNew?:boolean
)=>{
  // return{id, stock:stock || 10, isNew:isNew||true};
  // || es la manera vieja de JS que genera comportamiento extraño
  // la explicacion esta abajo y por eso ahora se usa ??
  //que se llama nullish-coalescing
   return{id, stock:stock ?? 10, isNew:isNew ?? true};
};
// en js 0 === false
// si mando vacio '' === false
// si mando false  === false
// esto produce comportamiento extraños

console.log(createProduct(1,12, true));
console.log(createProduct(1));
console.log(createProduct(1,0, false));