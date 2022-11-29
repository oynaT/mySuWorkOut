
// 03. SoftUni Bar Income
// Let`s take a break and visit the game bar at SoftUni. It is about time for the people behind the bar to go home and you are the person who has to draw the line and calculate the money from the products that were sold throughout the day. Until you receive a line with text "end of shift" you will be given lines of input. But before processing that line you have to do some validations first.

// Each valid order should have a customer, product, count and a price:

// Valid customer's name should be surrounded by '%' and must start with a capital letter, followed by lower-case letters
// Valid product contains any word character and must be surrounded by '<' and '>'
// Valid count is an integer, surrounded by '|'
// Valid price is any real number followed by '$'
// The parts of a valid order should appear in the order given: customer, product, count and a price.

// Between each part there can be other symbols, except ('|', '$', '%' and '.')

// For each valid line print on the console: "{customerName}: {product} - {totalPrice}"

// When you receive "end of shift" print the total amount of money for the day rounded to 2 decimal places in the following format: "Total income: {income}".

// Input / Constraints
// Strings that you have to process until you receive text "end of shift".
// Output
// Print all of the valid lines in the format "{customerName}: {product} - {totalPrice}"
// After receiving "end of shift" print the total amount of money for the day rounded to 2 decimal places in the following format: "Total income: {income}"
// Allowed working time / memory: 100ms / 16MB.

function softUniBarIncome(arr) { 
    arr.pop();
    let totalIncome = 0;
    arr.forEach((line) => {
        let pattern = /%([A-Z][a-z]+)%[^|$%.]*<(\w+)>[^|$%.]*\|([0-9]+)\|[^|$%.]*?([0-9]+\.?[0-9]*)\$/gm; 
        let result = pattern.exec(line);
	if (result) {
		let currentSum = Number(result[3]) * Number(result[4]);
		console.log(`${result[1]}: ${result[2]} - ${currentSum.toFixed(2)}`);
		totalIncome += currentSum;
	}        
    });
    console.log(`Total income: ${totalIncome.toFixed(2)}`); 
}

//softUniBarIncome('%George%<Croissant>|2|10.3$ %Peter%<Gum>|1|1.3$ %Maria%<Cola>|1|2.4 $end of shift');

// %George%<Croissant>|2|10.3$
// %Peter%<Gum>|1|1.3$
// %Maria%<Cola>|1|2.4$
// end of shift