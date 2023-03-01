(()=>{
    let isEnable = true;
    // isEnable = 123
    // isEnable = 'hoa'
    isEnable = false;

  let isNew: boolean = false;
  console.log('isNew' , isNew);
  isNew= true;
  console.log('isNew', isNew)

  const ramdomNumber = Math.random();
  console.log('ramdom', ramdomNumber);

  isNew = ramdomNumber >= 0.5 ? true : false ;
  console.log('isNew', isNew);

  const myBoolean : boolean = true;

})();
