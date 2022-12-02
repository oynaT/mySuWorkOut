function plantDiscovery(input) {
    let number = input.shift();
    let plantList = {};
    let plantArr = [];

    for (let index = 0; index < number; index++) {
        let curLine = input.shift();

        let args = curLine.split('<->');
        let plant = args[0];
        let rarity = Number(args[1]);

        let result = plantArr.find((х) => х.plant === plant);
        let index = plantArr.indexOf(result);

        if (result) {
            plantArr[index].rarity += rarity;
        } else {
            plantList = { plant, rarity, raiting: 0, counter: 0 };
            plantArr.push(plantList);
        }
    }

    let line = input.shift();   // 'Rate: Woodii - 10'
    while (line != 'Exhibition') {
        let commandArg = line.split(': ');
        let command = commandArg[0];
        let args = commandArg[1].split(' - '); // ['Woodii', '10']
        let plantName = args[0];
        let raitingR = Number(args[1]);

        if (plantArr.find((х) => х.plant === plantName)) {
            switch (command) {
                case 'Rate':
                    let result = plantArr.find((х) => х.plant === plantName);
                    let index = plantArr.indexOf(result);
                    plantArr[index].raiting += raitingR;
                    plantArr[index].counter += 1;
                    break;
                case 'Update':
                    let resultU = plantArr.find((х) => х.plant === plantName);
                    let indexU = plantArr.indexOf(resultU);
                    plantArr[indexU].rarity = raitingR;
                    break;
                case 'Reset':
                    let resultRr = plantArr.find((х) => х.plant === plantName);
                    let indexR = plantArr.indexOf(resultRr);
                    plantArr[indexR].raiting = 0;
                    plantArr[indexR].counter = 0; 
                    break;
            }
        } else {
            console.log('error');
        }
        line = input.shift();
    }
    console.log(`Plants for the exhibition:`);
    for (const name in plantArr) {
        let averageRating = (plantArr[name].raiting / plantArr[name].counter);
        if (!averageRating) {
            averageRating = 0;
        }
        console.log(`- ${plantArr[name].plant}; Rarity: ${plantArr[name].rarity}; Rating: ${averageRating.toFixed(2)}`);
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
// plantDiscovery(["2",
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"]);