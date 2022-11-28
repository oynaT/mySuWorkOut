function race(input) {
    let racersNames = input.shift();
    let racerList = {};
    let distance = 0;
    let patternName = /[A-Za-z]+/g;
    let patternDistance = /[\d]+/g
    let command = input.shift();

    while (command !== 'end of race') {
        let curName = command.match(patternName).join('');
        let curNumber = command.match(patternDistance).join('');
        if (racersNames.includes(curName)) {

            if (!racerList.hasOwnProperty(curName)) {
                racerList[curName] = 0;
            }
            for (const number of curNumber) {
                distance += Number(number);
            }
            racerList[curName] += distance;
            distance = 0;
            command = input.shift();
        }else {
            command = input.shift();
        }
    }
    let sortedArr = Object.entries(racerList).sort((a, b) => b[1] - a[1]);
        console.log(`1st place: ${sortedArr[0][0]}`);
        console.log(`2nd place: ${sortedArr[1][0]}`);
        console.log(`3rd place: ${sortedArr[2][0]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);

    // \s([a-z0-9]+[a-z0-9\_\.\-]*)@[a-z\-]+((\.[a-z]+)+)\b