
//03. plantDiscovery

function plantDiscovery(input) {
    let plantCount = Number(input.shift());
    let plants = {};

    for (let i = 0; i < plantCount; i++) {
        let plant = input.shift();
        let [plantName, rarity] = plant.split('<->');

        plants[plantName] = {
            rarity: Number(rarity),
            ratings: [],
        };
    }

    console.table(plants);
    let command = input.shift();
    while (command != 'Exhibition') {
        let [commandName, args] = command.split(': ');
        let [plantName, argument] = args.split(' - ');

        if (plants[plantName]) {
            switch (commandName) {
                case 'Rate':
                    let rating = Number(argument);
                    plants[plantName].ratings.push(rating)
                    break;
                case 'Update':
                    let rarity = Number(argument);
                    plants[plantName].rarity = rarity;
                    break;
                case 'Reset':
                    plants[plantName].ratings = [];
                    break;
            }
        } else {
            console.log('error');
        }

        command = input.shift();
    }

    let plantEntries = Object.entries(plants);
    plantEntries.sort((a, b) => {
        let result = b[1].rarity - a[1].rarity

        if (result == 0) {
            let averageA = calculateRating(a[1].ratings);
            let averageB = calculateRating(b[1].ratings);

            return averageB - averageA;
        }
        
        return result;
    });

    console.log('Plants for the exhibition:');
    for (const [plantName, plant] of plantEntries) {
        let averageRating = calculateRating(plant.ratings);
        console.log(`- ${plantName}; Rarity: ${plant.rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

    function calculateRating(ratings) {
        let sum = 0;
        for (const rating of ratings) {
            sum += rating;
        }

        let averageRating = sum / ratings.length;
        if (!averageRating) {
            averageRating = 0;
        }

        return averageRating;
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);


//##########################################################################

function pirates(input) {

    let cities = {};
    let array = [];

    while (input[0] !== 'Sail') {

        let command = input.shift().split('||');
        let city = command[0];
        let population = +command[1];
        let gold = +command[2];
    
        if (!array.hasOwnProperty(city)) {
            cities = {city, population, gold };
            array.push(cities);
        } else {
            array.city.population += population;
            array[city].gold += gold;
        }
    }
  
    // for (const t of array) {
    //     console.log(t.city);
    // }
    //array.forEach(e => console.log(e));
    //console.log(array);

    console.table(array);

} pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Tortuga||300000||10",
    "Sail"]);