async function getExchangeRate() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const rate = data.rates[toCurrency];

        if (rate) {
            const convertedAmount = (amount * rate).toFixed(2);
            document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            document.getElementById("result").innerText = "Invalid currency conversion!";
        }
    } catch (error) {
        document.getElementById("result").innerText = "Error fetching exchange rates.";
    }
}