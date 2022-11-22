// 07. A Miner Task
// You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), and every even – quantity. Your task is to collect the resources and print them each on a new line.
// Print the resources and their quantities in the format:
// {resource} –> {quantity}
// The quantities inputs will be in the range [1 … 2 000 000 000].

function minerTask(array) {
    let allResourse = {};
    let resourseName = '';

    for (const el of array) {
        if (isNaN(el)) {
            if (!allResourse.hasOwnProperty(el)) {
                allResourse[el] = 0;
                resourseName = el;
            } else {
                resourseName = el;
            }
        } else {
            allResourse[resourseName] += Number(el);
            resourseName = '';
        }
    }

    for (const item in allResourse) {
        console.log(`${item} -> ${allResourse[item]}`);
    }
}
minerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);



function minerTask2(array) {
    let allResourse = {};
    let resourseName = '';
 
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        if (i % 2 == 0) {
            if (!allResourse.hasOwnProperty(el)) {
                allResourse[el] = 0;
                resourseName = el;
            } else {
                resourseName = el;
            }
        } else {
            allResourse[resourseName] += Number(el);
            resourseName = '';
        }
    }
 
    for (const item in allResourse) {
        console.log(`${item} -> ${allResourse[item]}`);
    }
}
minerTask2(['Gold', '155', 'Silver', '10', 'Copper', '17']);
minerTask2(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);


function aMinerTask(array) {
    let input = array.slice();
 
    let resources = {};
 
    let index = 0;   
 
    while (index < input.length) {
 
        let metal = input[index];
        index++;
        let quantity = Number(input[index]);
        index++;
 
        if (resources.hasOwnProperty(metal)) {
            let oldQuantity = resources[metal];
            quantity += oldQuantity;
            resources[metal] = quantity;
 
        } else {
            resources[metal] = quantity;
        }
        
    }
 
    Object.keys(resources).forEach(key =>{
        console.log(`${key} -> ${resources[key]}`);
    })
}
aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);