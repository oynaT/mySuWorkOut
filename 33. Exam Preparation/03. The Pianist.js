function pianist(input) {

    let numberPieces = Number(input.shift());
    let listPieces = {};

    for (let index = 0; index < numberPieces; index++) {
        let curLine = input.shift();
        let [piece, composer, key] = curLine.split('|');

        listPieces[piece] = {
            composer: composer,
            key: key,
        };
    }
    
    let command = input.shift();
    while (command !== 'Stop') {
        let curLine = command.split('|');
        let action = curLine[0];
        let piece = curLine[1];

        switch (action) {
            case 'Add':
                let composer = curLine[2];
                let key = curLine[3];
                if (!listPieces.hasOwnProperty(piece)) {
                    listPieces[piece] = {};
                    listPieces[piece].composer = composer;
                    listPieces[piece].key = key;
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
                break;
            case 'Remove':
                if (listPieces[piece]) {
                    delete listPieces[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                let newKey = curLine[2];
                if (listPieces[piece]) {
                    listPieces[piece].key = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }
        command = input.shift();
    }

    for (const song in listPieces) {
        console.log(`${song} -> Composer: ${listPieces[song]['composer']}, Key: ${listPieces[song]['key']}`);
    }
}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);