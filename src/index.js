import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConversion from './currency_conversion.js';

function getElements(response) {
  if (response) {
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall() {
  const response = await CurrencyConversion.getConversion(currency);
  getElements(response);
}

$('#convert').click(function() {
  let conversion = $('#currencyToConvert').val();
  console.log(conversion);
  makeApiCall(currency);
});
