export class MyDate {
    constructor(
      public year:number=1993,
      public month:number=7,
      private _day:number=9
      ){}

    printFormat():string{
      const day = this.addPadding(this._day);
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
    get day(){
      return this._day;
    }
  get isLeapYear():boolean {
    return (this.year % 400 === 0 || this.year % 100 !== 0) && this.year % 4 == 0;
    }
  }

  const myDate = new MyDate(2022);

  const myDate2 = new MyDate(2000,3,7);
console.log('2000',  myDate2.isLeapYear);
console.log('2022',  myDate.isLeapYear);

//todos los get retornan un valor