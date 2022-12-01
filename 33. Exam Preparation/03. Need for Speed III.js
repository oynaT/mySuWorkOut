function needForSpeed(input) {
    let numberOfCars = Number(input.shift());
    let carList = {};

    for (let index = 0; index < numberOfCars; index++) {
        let curLine = input.shift();
        let [car, distance, fuel] = curLine.split('|');

        carList[car] = {
            distance: Number(distance),
            fuel: Number(fuel),
        };
    }
    let command = input.shift();
    while (command !== 'Stop') {
        let curLine = command.split(' : ');
        let action = curLine[0];
        let car = curLine[1];
        switch (action) {
            case 'Drive':
                let distance = Number(curLine[2]);
                let fuel = Number(curLine[3]);
                if (carList[car]['fuel'] > fuel) {
                    carList[car]['distance'] += distance;
                    carList[car]['fuel'] -= fuel;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                    if (carList[car]['distance'] > 100000) {
                        console.log(`Time to sell the ${car}!`);
                        delete carList[car];
                    }
                } else {
                    console.log(`Not enough fuel to make that ride`);
                }
                break;
            case 'Refuel':
                let fuelR = Number(curLine[2]);
                let curFuel = carList[car]['fuel'] + fuelR;
                if (curFuel >= 75) {
                    console.log(`${car} refueled with ${75 - carList[car]['fuel']} liters`);
                    carList[car]['fuel'] = 75;
                } else {
                    carList[car]['fuel'] += fuelR;
                    console.log(`${car} refueled with ${fuelR} liters`);
                }
                break;
            case 'Revert':
                let kmR = Number(curLine[2]);
                let curD = carList[car]['distance'] - kmR;
                if (curD <= 10000) {
                    carList[car]['distance'] = 10000;
                } else {
                    carList[car]['distance'] -= kmR;
                    console.log(`${car} mileage decreased by ${kmR} kilometers`);
                }
                break;
        }
        command = input.shift();
    }
    for (const car in carList) {
        console.log(`${car} -> Mileage: ${carList[car]['distance']} kms, Fuel in the tank: ${carList[car]['fuel']} lt.`);
    }
    //console.table(carList);
}
needForSpeed(['3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop']);
// needForSpeed([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop']);



//2 Решение
function needForSpeed2(input = []) {
    let numCars = Number(input.shift());
    let cars = input.splice(0, numCars);
    let objCars = {};

    for (const car of cars) {
        let [carModel, mileage, fuel] = car.split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        if (!objCars.hasOwnProperty(carModel)) {
            objCars[carModel] = { mileage: mileage, fuel: fuel };
        }
    }

    let betterInput = input.splice(0, input.indexOf('Stop'));

    for (const line of betterInput) {
        let [command, carName, value, value2] = line.split(' : ');
        value = Number(value);
        value2 = Number(value2);

        switch (command) {
            case 'Drive':
                let distance = value;
                let fuel = value2;

                if (fuel > objCars[carName].fuel) {
                    console.log('Not enough fuel to make that ride');
                } else if (objCars[carName].fuel > fuel) {
                    objCars[carName].fuel -= fuel;
                    objCars[carName].mileage += distance;
                    console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                    if (objCars[carName].mileage >= 100000) {
                        console.log(`Time to sell the ${carName}!`);
                        delete objCars[carName];
                    }
                }
                break;

            case 'Refuel':
                let fuelForRefill = value;

                if (objCars[carName].fuel + fuelForRefill >= 75) {
                    console.log(`${carName} refueled with ${75 - objCars[carName].fuel} liters`);
                    objCars[carName].fuel = 75;
                } else {
                    objCars[carName].fuel += fuelForRefill;
                    console.log(`${carName} refueled with ${fuelForRefill} liters`);
                }
                break;

            case 'Revert':
                let KMs = value;

                if (objCars[carName].mileage - KMs <= 10000) {
                    objCars[carName].mileage = 10000;
                } else {
                    objCars[carName].mileage -= KMs;
                    console.log(`${carName} mileage decreased by ${KMs} kilometers`);
                }
                break;
        }
    }

    function sortByMileage(a, b) {
        a = a[1].mileage;
        b = b[1].mileage;

        let comp = 0;

        if (b > a) {
            comp = 1;
        } else if (b < a) {
            comp = -1;
        }

        return comp;
    }

    function sortAlphabetically(a, b) {
        a = a[0];
        b = b[0];

        return a.localeCompare(b);
    }
    console.table(objCars);
    let arr = Object.entries(objCars).sort((a, b) => sortByMileage(a, b) || sortAlphabetically(a, b));

    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i][0]} -> Mileage: ${arr[i][1].mileage} kms, Fuel in the tank: ${arr[i][1].fuel} lt.`);
    }
}

needForSpeed2(['3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop']);