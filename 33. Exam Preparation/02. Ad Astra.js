function adAstra(input) {
    let reg = /(#|\|)(?<food>[A-Z a-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d{3,})\1/g;
    let pattern = reg.exec(input);

    let totalKcal = 0;
    let productStore = [];

    while (pattern) {
        let food = pattern.groups['food'];
        let date = pattern.groups['date'];
        let kcal = pattern.groups['kcal'];

        totalKcal += Number(kcal);

        let curProductDate = `Item: ${food}, Best before: ${date}, Nutrition: ${kcal}`; //Запшисваме директно в масива като стринг с value-tata
        productStore.push(curProductDate); // пълним масива

        pattern = reg.exec(input); // подаваме да вземе следващият регекс патърн
    }
    console.log(productStore);
    let totalDay = Math.floor(totalKcal / 2000);
    console.log(`You have food to last you for: ${totalDay} days!`);
    productStore.forEach(product => console.log(product));
}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);