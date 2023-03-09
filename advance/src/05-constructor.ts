export class MyDate {
//el contructor es el metodo con el que inicializamos la instancia
//de nuestra clase y ahi definimos los parametros que tendra
  constructor(
    public year:number=1993,
    public month:number=7,
    private day:number=9
    ){}
//esta es la forma acortada de definir un constructor y clase con TS


  printFormat():string{
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value:number){
    return  value < 10 ? `0${value}` : `${value}`
  }

  add(amont:number, type: 'days'|'months'|'years'){
      type === 'days' ? amont += this.day :
      type === 'months' ? amont += this.month :
      amont += this.year
  }
getDay(){
  return this.day;
}

}

const myDate = new MyDate(2022);
const myDate2 = new MyDate(2022,3);
const myDate3= new MyDate();
console.log(myDate.printFormat(), myDate2.printFormat(), myDate3.printFormat())