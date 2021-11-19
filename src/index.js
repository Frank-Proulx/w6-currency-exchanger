import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CurrencyService } from './currency-service.js';

function displayRate(response, country) {
  if(response.conversion_rates) {
    $("outputRate").text(`Your currency amount is ${response.conversion_rates.country}`)
  } else {
    $("#showError").text(`You have encountered an error: ${response.message}`);
  }
}

$("#exchange").click(function() {
  let amount = parseInt($("#amount").val());
  let country = $("#country").val();
  let countryCode = $("#countryCode").val();
});