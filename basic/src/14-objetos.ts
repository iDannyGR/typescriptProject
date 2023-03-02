(()=>{
  type Sizes = 'S'|'L'|'M'|'XL';
  const login = (data: {email:string, password:string})=>{
      console.log(data.email, data.password);
  };

  login({
    email: 'lkjasldkfjalksdf',
    password: 'kljdñsakjldfk'
  })
    const products:any = [];

    const addProduct = (data:{
      title:string,
      createAt: Date,
      stock: number,
      size?:Sizes
    })=>{
        products.push(data)
    }

addProduct({
  title: 'mi producto',
  createAt: new Date(),
  stock:15
})

addProduct({
  title: 'mi producto',
  createAt: new Date(),
  stock:15,
  size:'XL'
})
console.log(products)
})();
