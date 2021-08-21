import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyRates from './currencyRates.js';

function getElements(response) {
  console.log(response);
  if (response) {
    $('.showRateExchange').text(`${response.conversion_rates.AUD}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall() {
  const response = await CurrencyRates.getRates();
  getElements(response);
}

function convertCurrency(currency) {
  if (currency === "Chinese yuan renminbi")
    return "CNY";
  if (currency === "Croatian kuna")
    return "HRK";
  if (currency === "Fiji dollar")
    return "FJD";
  if (currency === "Hungarian forint")
    return "HUF";
  if (currency === "Namibian dollar") 
    return "NAD";
}

$('#convert').click(function() {
  let conversion = $('#amountUS').val();
  const currency = convertCurrency($('#chooseCurrency').val());
  // let currencyConverted = new CurrencyRates(conversion, currency);
  console.log(conversion);
  console.log(currency);
  // console.log(currencyConverted);
  makeApiCall();
});
