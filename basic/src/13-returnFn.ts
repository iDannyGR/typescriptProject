(()=>{
  const calcTotal = (prices: number[]): number =>{
   return  prices.reduce((acu, item) => acu + item )
  }
  const printTotal = (prices: number[]):void  =>{
        console.log(calcTotal(prices))

  }
 printTotal([1,2,3,4,55,7])
})();
