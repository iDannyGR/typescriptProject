// send a string return letter by letter hola => [h,o,l,a]
// if send array return string [m,a,r,i,a] => maria
function parseStr(input:string) :string[]; //sobrecarga
function parseStr(input:string[]) :string; // lo mismo
function parseStr(input:number) :boolean; // lo mismo


 function parseStr (input: unknown) : unknown {
  return  (typeof input=== 'number') ? true :
  Array.isArray(input) ? input.join('') :
  (typeof input === 'string' && input.split(''))
}

const rtArr= parseStr('pingaloco');
console.log(rtArr)
const rtaStr= parseStr(['a','b','i']);
console.log(rtaStr)
const rta= parseStr(0);
console.log(rta)
export {parseStr}