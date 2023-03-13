console.log(Math.PI);
console.log(Math.max(1,2,2,2,3,4,6,8,0));


class MyMath{
  static readonly PI= 3.14;

  static max(...arg:number[]){
      return arg.reduce((acc, item) => acc >= item ? acc: item);
  }
}

console.log(MyMath.PI)
console.log(MyMath.max(323232,3,2,2,9))
