function furniture(input) {
    let pattern = /[>]{2}(?<type>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/g;
    let totalMoney = 0;
    let command = input.shift();
    console.log('Bought furniture:');
   
    while (command !== 'Purchase') {
        let currentLine = pattern.exec(command);
        if (currentLine) {
            let name = currentLine.groups['type'];
            console.log(name);
            let price = Number(currentLine.groups['price']);
            let quantity = Number(currentLine.groups['quantity']);

            let productPrice = price * quantity;
            totalMoney += productPrice;

            command = input.shift();
            currentLine = pattern.exec(command);
        } else {
            command = input.shift();
        }
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);