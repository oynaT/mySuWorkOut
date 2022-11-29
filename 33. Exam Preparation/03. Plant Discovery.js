//03. Plant Discovery
//https://pastebin.com/KJK34a8J
//https://pastebin.com/vkUFLsaf
//https://pastebin.com/PtasjuY6
//https://pastebin.com/gNZyEXBS
//https://pastebin.com/LYZa0aC7
//https://pastebin.com/A9npbd27

//За сортирането може и така let sorted = b[1].rarity - a[1].rarity || b[1].rating- a[1].rating

//console.table()



function plantDiscovery2(input) {
    let n = input.shift();
 
    let store = {};
 
    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split("<->");
        rarity = Number(rarity);
        if (!store.hasOwnProperty(plant)) {
            store[plant] = { rarity: rarity, rating: [] };
 
        } else {
            store[plant]['rarity'] = rarity;
        }
    }
     let line = input.shift();
    while (line !== 'Exhibition') {
        let [command, tokens] = line.split(": ");
        let [plants, raritys] = tokens.split(" - ");
 
        raritys = Number(raritys);
        if (command === 'Exhibition') {
            break;
        }
 
        if (command === 'Rate') {
            // "Rate: {plant} - {rating}" – 
            // add the given rating to the plant (store all ratings);
            if (store.hasOwnProperty(plants)) {
                store[plants]['rating'].push(raritys);
            } else {
                console.log('error');
            }
 
        } else if (command === 'Update') {
            // Update: {plant} - {new_rarity}" – 
            // update the rarity of the plant with the new one
            if (store.hasOwnProperty(plants)) {
                store[plants]['rarity'] = raritys;
            } else {
                console.log('error');
            }
        } else if (command === 'Reset') {
            // "Reset: {plant}" – remove all the ratings of the given plant;
            if (store.hasOwnProperty(plants)) {
                store[plants]['rating'] = [];
            } else {
                console.log('error');
            }
        }
 
        line = input.shift();
    }
 
    console.log('Plants for the exhibition:');
 
    let pl = Object.keys(store);
 
    for (const el of pl) {
        if (store[el].rating.length == 0) {
            console.log(`- ${el}; Rarity: ${store[el]['rarity']}; Rating: 0.00`);
        } else {
 
            let avg = store[el]['rating'].reduce((a, b) => a + b) / store[el]['rating'].length;
            console.log(`- ${el}; Rarity: ${store[el]['rarity']}; Rating: ${avg.toFixed(2)}`);
        }
    }
}

plantDiscovery2();