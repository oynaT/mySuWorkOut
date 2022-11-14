// You are given a sequence of people and for every person what cards he draws from the deck. 

//The input will be an array of strings. Each string will be in the format:

// {personName}: {PT, PT, PT,… PT}

// Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to check it.

// A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).

// Finally print out the total value each player has in his hand in the format:

// {personName}: {value}


//https://pastebin.com/hQ9Rt3RT


function cardGame(array) {

    let deck = {};

    let values = {
        '1': 10, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
        'J': 11, 'Q': 12, 'K': 13, 'A': 14
    }
    let power = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    let players = array.map(el => el.split(': '));


    let playerROW = players.shift();

    while (true) {

        let name = playerROW[0];
        let cards = playerROW[1].split(', ');


        if (!deck.hasOwnProperty(name)) {
            deck[name] = [];
        }

        for (const card of cards) {

            let unique = deck[name].find(el => el === card);
            if (!unique) {
                deck[name].push(card);
            }
        }
        if (players.length == 0) {
            break;
        }
        playerROW = players.shift();
    }

    let addressBookEntries = Object.entries(deck);

    for (const [key, value] of addressBookEntries) {

        let name2 = key;
        let totalSum = 0;

        for (const powers of value) {

            let curPowLenght = powers.length;
            let cPower = 0;
            let cValue = 0;

            if (curPowLenght == 2) {
                cPower = Number(values[powers[0]]);
                cValue = power[powers[1]];
                totalSum += cPower * cValue;
            } else {
                cPower = Number(values[powers[0]]);
                cValue = power[powers[2]];
                totalSum += cPower * cValue;
            }

        }

        console.log(`${name2}: ${totalSum}`);
    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS, QS',

    'Tomas: 3H, 10S, JC, KD, 5S, 10S',

    'Andrea: QH, QC, QS, QD',

    'Tomas: 6H, 7S, KC, KD, 5S, 10C',

    'Peter: JD, JD, JD, JD, JD, JD',

    'Andrea: QH, QC, JS, JD, JC',
]);
cardGame(
    [

        'John: 2C, 4H, 9H, AS, QS',

        'Slav: 3H, 10S, JC, KD, 5S, 10S',

        'Alex: 6H, 7S, KC, KD, 5S, 10C',

        'Thomas: QH, QC, JS, JD, JC',

        'Slav: 6H, 7S, KC, KD, 5S, 10C',

        'Thomas: QH, QC, JS, JD, JC',

        'Alex: 6H, 7S, KC, KD, 5S, 10C',

        'Thomas: QH, QC, JS, JD, JC',

        'John: JD, JD, JD, JD'

    ]
);

//console.log(JSON.stringify(players));