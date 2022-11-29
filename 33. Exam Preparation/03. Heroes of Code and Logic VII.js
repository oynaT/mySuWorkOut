function heroesOfCodeAndLogic(input) {
    let numberOfHeroes = Number(input.shift());
    let heroesList = {};

    for (let index = 0; index < numberOfHeroes; index++) {
        let currentLine = input.shift();
        let [hero, hp, mp] = currentLine.split(' ');

        heroesList[hero] = {
            hp: Number(hp),
            mp: Number(mp),
        };
    }
    let command = input.shift();
    while (command !== 'End') {
        let line = command.split(' - ');
        let action = line[0];
        let hero = line[1];

        switch (action) {
            case 'CastSpell':
                let mpNeed = Number(line[2]);
                let castName = line[3];
                if (heroesList[hero]['mp'] >= mpNeed) {
                    let mpLeft = heroesList[hero]['mp'] - mpNeed;
                    console.log(`${hero} has successfully cast ${castName} and now has ${mpLeft} MP!`);
                    heroesList[hero]['mp'] -= mpNeed;
                } else {
                    console.log(`${hero} does not have enough MP to cast ${castName}!`);
                }
                break;
            case 'TakeDamage':
                let damage = Number(line[2]);
                let attacker = line[3];
                let curHp = heroesList[hero]['hp'] - damage;
                if (curHp > 0) {
                    console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${curHp} HP left!`);
                    heroesList[hero]['hp'] -= damage;
                } else {
                    console.log(`${hero} has been killed by ${attacker}!`);
                    delete heroesList[hero];
                }
                break;
            case 'Recharge':
                let amount = Number(line[2]);
                let curAm = heroesList[hero]['mp'] + amount;
                if (curAm > 200) {
                    console.log(`${hero} recharged for ${200 - heroesList[hero]['mp']} MP!`);
                    heroesList[hero]['mp'] = 200;
                } else {
                    console.log(`${hero} recharged for ${amount} MP!`);
                    heroesList[hero]['mp'] += amount;
                }
                break;
            case 'Heal':
                let amountHp = Number(line[2]);
                let recHp = heroesList[hero]['hp'] + amountHp;
                if (recHp > 100) {
                    console.log(`${hero} healed for ${100 - heroesList[hero]['hp']} HP!`);
                    heroesList[hero]['hp'] = 100;
                } else {
                    console.log(`${hero} healed for ${amountHp} HP!`);
                    heroesList[hero]['hp'] += amountHp;
                }
                break;
        }
        command = input.shift();
    }
    for (const hero in heroesList) {
        console.log(`${hero}\n  HP: ${heroesList[hero]['hp']}\n  MP: ${heroesList[hero]['mp']}`);
    }
}
heroesOfCodeAndLogic(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);
// heroesOfCodeAndLogic(['4',
//     'Adela 90 150',
//     'SirMullich 70 40',
//     'Ivor 1 111',
//     'Tyris 94 61',
//     'Heal - SirMullich - 50',
//     'Recharge - Adela - 100',
//     'CastSpell - Tyris - 1000 - Fireball',
//     'TakeDamage - Tyris - 99 - Fireball',
//     'TakeDamage - Ivor - 3 - Mosquito',
//     'End',
// ]);