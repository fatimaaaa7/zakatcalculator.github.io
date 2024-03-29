function calculateZakat() {
    const wealth = parseFloat(document.getElementById('wealth').value);
    const nisab = parseFloat(document.getElementById('nisab').value);

    if (isNaN(wealth) || isNaN(nisab) || wealth < 0 || nisab < 0) {
        alert('Please enter valid numbers for total wealth and Nisab threshold.');
        return;
    }

    const zakatAmount = wealth >= nisab ? wealth * 0.025 : 0;

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your Zakat amount is: $${zakatAmount.toFixed(2)}`;
}
