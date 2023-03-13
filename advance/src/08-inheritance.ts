export class Animal {
  constructor(
    public  name:string ){}

    move(){
      console.log('moving');
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

  raws(times: number){
      for (let index = 0; index < times; index++) {
       console.log('miaaauuuu')

      }
    }
}


const kuko = new Cat('kuko', 'yo');
kuko.move();
kuko.raws(5);
console.log(kuko.greeting());
console.log(kuko.owner);