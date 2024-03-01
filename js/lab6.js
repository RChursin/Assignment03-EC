/** To validate the user entries for investment amount, interest rate, and the number of years in Lab 6, 
 * you can use loops to continuously prompt the user until valid input is provided.
 * each user input is validated using a do-while loop. The loop ensures that the user is prompted repeatedly until they provide valid input. 
 * Once valid input is received for all variables, the calculation proceeds and the result is displayed.
 */

// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// VALIDATE INVESTMENT AMOUNT
do {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx')); // amount should be more than 0 and not a string
    if (isNaN(investment) || investment < 0) {
        alert('Investment amount must be greater than 0.');
    }
} while (isNaN(investment) || investment < 0); // assuming investment amount more than 0 investment cant be negative

// VALIDATE INTEREST RATE
do {
    rate = parseFloat(prompt('Enter interest rate as xx.x')); // assuming a realistic interest rate like min 0.10% and max 6%
    if (isNaN(rate) || rate < 0.10 || rate > 6) {
        alert('Interest rate must be between 0.10% and 6%.');
    }
} while (isNaN(rate) || rate < 0.10 || rate > 6);

// VALIDATE NUMBER OF YEARS
do {
    years = parseInt(prompt('Enter the number of years you want to invest for')); // assuming a realistic number of years min 1 max 30
    if (isNaN(years) || years < 1 || years > 30) {
        alert('Years must be between 1 and 30.');
    }
} while (isNaN(years) || years < 1 || years > 30);

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100); 
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);