let AnyVar: any;
AnyVar=true;
AnyVar=undefined;
AnyVar={};

let isNew:boolean = AnyVar;


let unknowVar: unknown;
unknowVar=true;
unknowVar=undefined;
unknowVar={};
if(typeof unknowVar === 'boolean') {
  let isNewv2:boolean = unknowVar
};

// unknowVar.toUpercase();
//unknow te fuerza a hacer una verificacion
//aunque tiene la libertad de asignar lo que sea
typeof unknowVar === 'string' ? unknowVar.length : null


const parse = (str:string): unknown =>{
  return JSON.parse(str);
}

