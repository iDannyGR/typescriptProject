(()=>{
  type Size = 'S'|'L'|'M'|'XL';
  function createProducttoJson(
    title:string,
    createAt:Date,
    stock: number,
    size: Size
    ){



      return {title, createAt, stock, size}
  }
const producto1= createProducttoJson('P1', new Date(), 12, 'XL')
console.log(producto1)
console.log(producto1.size)
console.log(producto1.title)



const createProducttoJsonv2 = (
  title:string,
  createAt:Date,
  stock: number,
  size?: Size
  ) => {
    return {title, createAt, stock, size}
  }

const producto2= createProducttoJsonv2('P1', new Date(), 12)
console.log(producto2)
console.log(producto2.size)
console.log(producto2.title)


})();
