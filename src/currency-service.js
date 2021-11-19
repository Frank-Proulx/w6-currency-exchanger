export class CurrencyService {
  static getExchangeRate(country) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json().country;
      })
      .catch(function(error) {
        return error;
      });
  }
}