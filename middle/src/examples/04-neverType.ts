const withoutEnd = ()=>{
    while(true){
      console.log('nunca pares de joder');
    }
};


const fail = (message:string)=>{
  throw new Error(message);
}


const example = (input : unknown) =>{
    if(typeof input === 'string') {
      return 'es un string'
    }else if (Array.isArray(input)) {
        return 'es un array'
    }
    return fail('no hizo nada')
}

console.log(example('hola'));
console.log(example([1,1,1,1]));
console.log(example(12121212));
console.log(example('hola despues del fail'));

//ayuda a detectar errores de ciclos infinitos