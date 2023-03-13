export class MyDate {
  constructor(
    public year:number=1993,
    private _month:number=7,
    private _day:number=9
    ){}

  printFormat():string{
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value:number){
    return  value < 10 ? `0${value}` : `${value}`
  }

  add(amont:number, type: 'days'|'months'|'years'){
      type === 'days' ? amont += this._day :
      type === 'months' ? amont += this._month :
      amont += this.year
  }
   get month(){
    return this._month;
  };

  set month(newValue:number){
      if(newValue >= 1 && newValue <= 12){
        this._month = newValue
      }else{
      throw new Error("fail");
      }
  };

get isLeapYear():boolean {
  return (this.year % 400 === 0 || this.year % 100 !== 0) && this.year % 4 == 0;
  }
};

const myDate = new MyDate(1992,4,12);
myDate.month=70;

console.log(myDate.month)