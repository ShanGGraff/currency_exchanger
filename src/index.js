import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyRates from './currencyRates.js';

function getElements(response) {
  if (response.success) {
    let currencyList = response;
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(currency) {
  const response = await CurrencyRates.getRates();
  getElements(response);
}

$('#convert').click(function() {
  let conversion = $('#amountUS').val();
  const currency = $('#chooseCurrency').val();
  console.log(conversion);
  console.log(currency);
  makeApiCall();
});