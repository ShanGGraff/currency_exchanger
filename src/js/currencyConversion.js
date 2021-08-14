export default class CurrencyConversion {
  constructor (us, foreign) {
    this.us = us;
    this.foreign = foreign;
  }

  usToForeignCurrencyConverter(){
    return this.us * this.foreign;
  }
}