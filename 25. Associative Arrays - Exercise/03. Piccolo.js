
// 3. Piccolo

// Write a function that:

// · Records a car number for every car that enters the parking lot

// · Removes a car number when the car goes out

// · Input will be an array of strings in format [direction, carNumber]

// Print the output with all car numbers which are in the parking lot sorted in ascending by number.

// If the parking lot is empty, print: "Parking Lot is Empty".


function piccolo(array) {

    let parkList = {};

    let fullList = array.map(el => el.split(', '));
    console.log(fullList);

    for (const el of fullList) {

        let status = el[0];
        let carNumber = el[1];
        console.log(carNumber);

        if(status === 'IN'){
            parkList[carNumber] = [status];
            //console.log(JSON.stringify(parkList));

        } else if(status === 'OUT'){
            delete parkList[carNumber];

        }
    }

    let sortedList = Object.entries(parkList).sort((a,b) => a[0].localeCompare(b[0]));

    for (const car of sortedList) {
        console.log(`${car[0]}`);
    }

}
piccolo([
    'IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU']);