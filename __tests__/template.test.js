import CurrencyConversion from '../src/js/currencyConversion.js'
import 

describe('CurrencyConversion', () => {
  let currency;

  beforeEach(() => {
    currency = new CurrencyConversion(20.00, 76.00);
  });

  test("should create a currency object with the currency amount in US dollars and the amount of US dollars in selected foreign currency", () => {
    expect(currency.us).toEqual(20);
    expect(currency.foreign).toEqual(76);
    expect(currency.usToForeignCurrencyConverter()).toEqual(1520.00);
  });
});