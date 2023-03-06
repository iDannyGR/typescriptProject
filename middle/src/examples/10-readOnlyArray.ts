const numbers:ReadonlyArray<number> = [1,2,3,4,5,6];
numbers.push(9);
numbers.pop();
numbers.unshift(1);
numbers.filter(()=>{});


//readonlyarray solo permite lo metodos que no modifican
//el array original como filter reduce map forearch
//modificar o mutar