import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CurrencyService } from './currency-service.js';

function displayRate(response, country, amount) {
  if(response.conversion_rates) {
    $("#outputRate").text(`Your currency amount is ${(response.conversion_rates[country] * amount).toFixed(2)}`);
  } else {
    $("#showError").text(`You have encountered an error: ${response.message}`);
  }
}

$("#exchange").submit(function(event) {
  event.preventDefault();
  let amount = parseInt($("#amount").val());
  let country = $("#country").val();
  let countryCode = $("#countryCode").val();
  CurrencyService.getExchangeRate()
    .then(function(response) {
      displayRate(response, country, amount);
    });
});