//https://pastebin.com/XHPUQLA1

function netherRealms(input) {

    let splitPattern = /\s*,\s*/g; ///[, ]+/g
    let demonsArr = input.split(splitPattern);
    let demons = {};
    let healthPattern = /[^0-9.\/+*-]/g;
    let sumPattern = /[+-]?\d+\.?\d*/g;
    let dmgPattern = /\*|\//g;

    for (const demon of demonsArr) {
        if (!demons.hasOwnProperty(demon)) {
            demons[demon] = [];
        }

        let hp = 0;
        let dmg = 0;

        if (demon.match(healthPattern) != null) {
            for (const char of demon.match(healthPattern)) {
                hp += char.charCodeAt(0);
            }
        }

        if (demon.match(sumPattern) != null) {
            for (const number of demon.match(sumPattern)) {
                dmg += Number(number);
            }
        }

        if (demon.match(dmgPattern) != null) {
            for (const operation of demon.match(dmgPattern)) {
                if (operation == '*') {
                    dmg *= 2;
                } else {
                    dmg /= 2;
                }
            }
        }
        demons[demon] = [hp, dmg];
        //demons[demon] = {};
        //demons[demon]['health'] = hp;
        //demons[demon]['damage'] = dmg;

    }
    let sortedDemons = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [name, stats] of sortedDemons) {
        console.log(`${name} - ${stats[0]} health, ${(stats[1]).toFixed(2)} damage`);

    }
}
netherRealms('Gos/ho');
//netherRealms('M3ph-0.5s-0.5t0.0**');
//netherRealms('M3ph1st0**, Azazel');





