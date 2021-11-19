import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CurrencyService } from './currency-service.js';
import { codeIdentifier } from './switch.js';

function displayFromUSD(response, country, amount) {
  if(response.conversion_rates) {
    if (response.conversion_rates[country]) {
      $("#outputRate").text(`Your currency amount is ${(amount * response.conversion_rates[country]).toFixed(2)} ${codeIdentifier(country)}`);
    } else {
      $("#outputRate").text("Please enter a valid country code from the list of supported currencies");
    }
  } else {
    $("#showError").text(`You have encountered an error: ${response.message}`);
  }
}

function displayToUSD(response, country, amount) {
  if(response.conversion_rates) {
    if (response.conversion_rates[country]) {
      $("#outputRate").text(`Your currency amount is ${(amount / response.conversion_rates[country]).toFixed(2)} US dollars`);
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
  let exchangeDirection = $("input[name='currencyChoice']:checked").val();
  CurrencyService.getExchangeRate()
    .then(function(response) {
      if (country !== "manual" && exchangeDirection === "fromUSD") {
        displayFromUSD(response, country, amount);
      } else if (country === "manual" && exchangeDirection === "fromUSD") {
        displayFromUSD(response, countryCode, amount);
      } else if (country !== "manual" && exchangeDirection === "toUSD") {
        displayToUSD(response, country, amount);
      } else {
        displayToUSD(response, countryCode, amount);
      }
    });
});

