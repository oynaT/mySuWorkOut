function pirates(input) {
    let plunder = {};
    let command = input.shift();

    while (command != 'Sail') {
        let args = command.split('||');
        let town = args[0];
        let population = Number(args[1]);
        let gold = Number(args[2]);

        if (!plunder.hasOwnProperty(town)) {
            plunder[town] = { 'population': 0, 'gold': 0 };
            
        }
        plunder[town]['population'] += population;
        plunder[town]['gold'] += gold;
        command = input.shift();
    }
    command = input.shift();
    while (command != 'End') {
        let args = command.split('=>');
        let action = args[0];
        if (action == 'Plunder') {
            let town = args[1];
            let population = Number(args[2]);
            let gold = Number(args[3]);
            if (plunder.hasOwnProperty(town)) {
                plunder[town]['population'] -= population;
                plunder[town]['gold'] -= gold;
            }
            console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`)
            if (plunder[town]['gold'] == 0 || plunder[town]['population'] == 0) {
                console.log(`${town} has been wiped off the map!`);
                delete plunder[town];
            }
        } else if (action == 'Prosper') {
            let town = args[1];
            let gold = Number(args[2]);
            if (gold > 0) {
                plunder[town]['gold'] += gold;
                let totalGold = plunder[town]['gold'];
                console.log(`${gold} gold added to the city treasury. ${town} now has ${totalGold} gold.`);
            } else {
                console.log('Gold added cannot be a negative number!');
            }
        }
        command = input.shift();
    }

    if(Object.keys(plunder).length == 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }else{
        console.log(`Ahoy, Captain! There are ${Object.keys(plunder).length} wealthy settlements to go to:`);
    }
    for (const town in plunder) {
        console.log(`${town} -> Population: ${plunder[town]['population']} citizens, Gold: ${plunder[town]['gold']} kg`)
    }
    console.table(plunder);
}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);