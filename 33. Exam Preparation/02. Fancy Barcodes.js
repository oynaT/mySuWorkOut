function fancyBarcode(input) {
    let number = input.shift();
    let namePat = /([@])[#]{1,}(?<name>[A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1})\1[#]{1,}/g;
    let digitPat = /\d/g;

    for (let index = 0; index < number; index++) {
        let curBarC = input.shift();
        if (curBarC.match(namePat)) {
            if(!curBarC.match(digitPat)){
                console.log(`Product group: 00`);
            }else{
                let result = curBarC.match(digitPat);
                console.log(`Product group: ${result.join('')}`);
            }              
        }else {
            console.log(`Invalid barcode`);
        };
    }
}
fancyBarcode(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);
fancyBarcode(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]);