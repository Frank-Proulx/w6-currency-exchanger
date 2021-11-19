import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CurrencyService } from './currency-service.js';

function displayRate(response, country, amount) {
  if(response.conversion_rates) {
    if (response.conversion_rates[country]) {
      $("#outputRate").text(`Your currency amount is ${(response.conversion_rates[country] * amount).toFixed(2)}`);
    } else {
      $("#outputRate").text("Please enter a valid country code from the list of supported currencies");
    }
  } else {
    $("#showError").text(`You have encountered an error: ${response.message}`);
  }
}

$("#exchange").submit(function(event) {
  event.preventDefault();
  let amount = parseInt($("#amount").val());
  let country = $("#country").val();
  let countryCode = $("#countryCode").val().toUpperCase();
  CurrencyService.getExchangeRate()
    .then(function(response) {
      if (country !== "manual") {
        displayRate(response, country, amount);
      } else {
        displayRate(response, countryCode, amount);
      }
    });
});