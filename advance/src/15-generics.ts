import { Cat } from './09-protected'
// function getValue (value:number | string){
//     return value
// }

// function getValue (value:unknown){
//     return value
// }

function getValue<T>(value:T){
    const array:T[]= []
  return value;
}
const cuco = new Cat('cuquito', 'ayo')

getValue<number>(12).toFixed();
getValue<string>('12').toString();
getValue<number[]>([1,2,2]).forEach;
getValue<Cat>(cuco).greeting;