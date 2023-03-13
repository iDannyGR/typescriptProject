export abstract class Animal {
  constructor(
    protected  name:string ){}

    move(){
      console.log('moving');
    }
    protected doSomething(){
      console.log('raaaaaa')
    }
    greeting(){
      return `hello im ${this.name}`
    }

}
export class Cat extends Animal{
    constructor(
      name:string,
      public owner:string)
      {
        super(name);
      }

  raws(times: number):void{
      for (let index = 0; index < times; index++) {
       console.log(`miaaauuuu ${this.name}`)
       this.doSomething()

      }
    }
}


const kuko = new Cat('kuko', 'yo');
kuko.move();
kuko.raws(5);

console.log(kuko.greeting());
console.log(kuko.owner);

//protected es un privado con herencia