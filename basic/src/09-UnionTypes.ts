(()=>{
   let useID: string | number;
   useID = 12312321;
   useID= 'hosoadfsdf';

   function greeting(myText: string | number) {
      if(typeof myText === 'string') {
        console.log(`string ${myText.toLowerCase()}`)
      } else{
        myText.toFixed(1);
        console.log(`number ${myText.toFixed(1)}`)
      }


   }

   greeting('asa');
   greeting(31321.41422);

})();
