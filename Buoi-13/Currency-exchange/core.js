const key = "637677a1f666562448d84e8f";
let currencyElement_1 = document.getElementById("currency-1");
let currencyElement_2 = document.getElementById("currency-2");
let amountElement_1 = document.getElementById("amount-1");
let amountElement_2 = document.getElementById("amount-2");
let rateElement = document.getElementById("rate");
let swapBtn = document.getElementById("button");

//add Event for currency and amounts:
currencyElement_1.addEventListener("change", exchange);
currencyElement_2.addEventListener("change", exchange);
amountElement_1.addEventListener("input", exchange);

function exchange(event) {
  console.log(event);
  // let currency_1 = event.target.value;
  let currency_1 = currencyElement_1.value;
  let currency_2 = currencyElement_2.value;

  let amount_1 = amountElement_1.value;
  let amount_2 = amountElement_2.value;

  fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${currency_1}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      let rate = data.conversion_rates[currency_2];
      console.log(currency_2, rate);

      rateElement.textContent = `1 ${currency_1} = ${rate} ${currency_2}`;
      amountElement_2.value = (amountElement_1.value * rate).toFixed(2);
    });
}

//add event for swap button:
swapBtn.addEventListener("click", swap);
function swap() {
  let tempValue = currencyElement_1.value;
  currencyElement_1.value = currencyElement_2.value;
  currencyElement_2.value = tempValue;
  exchange();
}
exchange();
