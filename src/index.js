import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyRates from './currencyRates.js';

function getElements(response) {
  console.log(response);
  if (response.result === "success") {

    $('.showRateExchange').text(`The conversion rate from USD to ${response.target_code} is: ${response.conversion_result} at a rate of: ${response.conversion_rate}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.result}`);
  }
}

async function makeApiCall(country, amountUS) {
  const response = await CurrencyRates.getRates(country, amountUS);
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
  let amountUS = parseInt($('#amountUS').val());
  let country = convertCurrency($('#chooseCurrency').val());
  // let currencyConverted = new CurrencyRates(conversion, currency);
  console.log(amountUS);
  console.log(country);
  // console.log(currencyConverted);
  makeApiCall(country, amountUS);
});
