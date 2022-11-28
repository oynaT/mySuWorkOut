function emojiDetector(input) {
    let namePattern = /([:]{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let coolThPattern = /\d/g;
    let coolEmojies = [];

    let totalCoolTh = 1;
    let validNameE = null;
    while ((validNameE = namePattern.exec(input)) !== null) {
        coolEmojies.push(validNameE[0]);
    }
    while ((validNameE = coolThPattern.exec(input)) !== null) {
        totalCoolTh *= Number(validNameE[0]);
    }
    console.log(`Cool threshold: ${totalCoolTh}`);
    console.log(`${coolEmojies.length} emojis found in the text. The cool ones are:`);

    for (const emoji of coolEmojies) {
        let coolTotal = 0;
        for (const char of emoji) {
            if (char !== "*" && char !== ":") {
                coolTotal += char.charCodeAt(0);
            }
        }
        if (totalCoolTh < coolTotal) {
            console.log(emoji);
        }
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);




function emojiDetector1(input) {

    let text = input.shift();
    let totalCoolTh = 1;
    let countEmojies = 0;
    let coolEmojies = [];

    let digitPattern = text.match(/\d/g);
    for (const digit of digitPattern) {
        let number = Number(digit);
        totalCoolTh *= number;
    }
    console.log(`Cool threshold: ${totalCoolTh}`);
    let namePattern = text.matchAll(/([:]{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g);
    for (const emojiMath of namePattern) {
        let emoji = emojiMath[0];
        let emojiName = emojiMath.groups.emoji;
        countEmojies++;
        let coolTotal = 0;

        for (const char of emojiName) {
            coolTotal += char.charCodeAt(0);
        }
        if (totalCoolTh < coolTotal) {
            coolEmojies.push(emoji);
        }
    }
    console.log(`${countEmojies} emojis found in the text. The cool ones are:`);
    console.log(coolEmojies.join('\n'));
}
emojiDetector1(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);