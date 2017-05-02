const xhr = require("xhr");

const url = "http://api.fixer.io/latest?base=GBP";

module.exports = {
  convert(value, currency) {
    return new Promise((resolve, reject) => {
      xhr.get(url, (error, meta, body) => {
        body = JSON.parse(body);
        resolve(value * body.rates[currency]);
      });
    });
  },

  currencies() {
    return new Promise((resolve, reject) => {
      xhr.get(url, (error, meta, body) => {
        body = JSON.parse(body);
        resolve(Object.keys(body.rates));
      });
    });
  }
}
