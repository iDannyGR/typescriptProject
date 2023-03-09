export class MyDate {
  year:number;
  month: number;
 private day:number;
//el contructor es el metodo con el que inicializamos la instancia
//de nuestra clase y ahi definimos los parametros que tendra
  constructor(year:number, month:number, day:number){
    this.year= year,
    this.month = month,
    this.day = day
  }
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

const myDate = new MyDate(1992,7,10)
console.log(myDate.printFormat());
