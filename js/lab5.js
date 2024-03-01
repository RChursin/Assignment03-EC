/** To validate the entry for repeating the application in Lab 5, 
 * you can modify the loop to ensure that the user input is either 'y' or 'n'. 
 * After the initial prompt for running the application again, 
 * there's an additional while loop that continuously prompts the user until a valid input ('y' or 'n') 
 * is provided. Once the user enters a valid input, the loop continues accordingly.
 */
let miles;
let gallons;
let mpg;
let again;

do {
    miles = parseFloat(prompt('Enter miles driven'));
    gallons = parseFloat(prompt('How many gallons does your car\'s tank hold'));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
    } else {
        alert('One or both entries are invalid.');
    }
    again = prompt('Run application again? (y or n)');
    while (again !== 'y' && again !== 'n') {
        again = prompt('Invalid input. Please enter "y" to run again or "n" to exit:');
    }
} while (again === 'y');

console.log('Application has exited.');
