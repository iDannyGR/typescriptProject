(()=>{
  let productTitle = 'my Amazing product';
  // productTitle =23;
  // productTitle = ()=>()
  let productPrice = 100;
  productTitle= 'my Amzing product changed';
  console.log('productTitle', productTitle)

  const productDescription = "bla' bla bla bla bla bla";
  console.log('productDescription', productDescription);

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
  ` //backticks template strings
    console.log(summary)
})();
