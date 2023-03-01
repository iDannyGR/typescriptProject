(()=>{

  // let miNumber:number = undefined;
  // let myString: string= null;
  let myNull:null = null;
  let myUndefined:undefined = undefined;

  let myNumber :number | null = null;
  myNumber = 12;

  let myString : string | undefined = undefined;

  function hi(name : string | null){
      let hello = 'hola ';
      if(name){
        hello += 'name'
      }else{
        hello += 'nobody'
      }

      console.log(hello);
  }

  function hiv2(name : string | null){
    let hello = 'hola ';
    hello += name?.toLowerCase() || 'nobody'; //optional chaining
    //o encandenamiento opcional verifica si es null o undefined
    console.log(hello);
}



hiv2('daniel');
hiv2(null);

})();
