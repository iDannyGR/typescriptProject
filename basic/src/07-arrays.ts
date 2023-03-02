(()=>{
  const prices = [11,34,324,34324,54, 'hola', true];
    // prices.push('asdf');
    // prices.push(true);
    // prices.push({})
    prices.push(12);
    let products = ['hola', true];
    products.push(12);

    let mixed:(number | string | boolean | Object)[] = ['hola', true];
    mixed.push(12);
    mixed.push(true);
    mixed.push({});
    mixed.push([]);

    let numbers = ['as'];
    numbers.map(item => item * 2);
  console.log(numbers)
})();
