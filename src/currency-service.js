export class CurrencyService {
  static getExchange() {
    return fetch(`https://v6.exchangerate-api.com/v6/af8f39a23517174547d86d6b/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(respnose.statusText)
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
  }
}