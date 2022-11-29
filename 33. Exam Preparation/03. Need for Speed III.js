function needForSpeed(input) {

    let numberOfCars = Number(input.shift());
    let carList = {};

    for (let index = 0; index < numberOfCars; index++) {
        let curLine = input.shift();
        let [car, distance, fuel] = curLine.split('|');

        carList[car] = {
            distance: distance,
            fuel: fuel,
        };
    }
    console.table(carList);
    let command = input.shift();
    while (command !== 'Stop') {
        let curLine = command.split(' : ');
        let action = curLine[0];
        let carName = curLine[1];
        switch (action) {
            case 'Drive':
                let distance = Number(curLine[2]);
                let fuelD = Number(curLine[3]);

                break;
            case 'Refuel':
                let fuelR = Number(curLine[2]);

                break;
            case 'Revert':
                let kmR = Number(curLine[2]);

                break;
        }
        command = input.shift();
    }
    console.log(`{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt.`)
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop']);