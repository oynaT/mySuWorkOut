function destinationMapper(input){
    let reg = /([=|\/])(?<name>[A-Z][A-Za-z]{2,})\1/g;
    let matches = [...input.matchAll(reg)]
    let names = [];
    let total = 0;

    for (const destination of matches) {
        let name = destination[2];
        names.push(name);
        total += name.length;      
    }
    console.log(`Destinations: ${names.join(', ')}`);
    console.log(`Travel Points: ${total}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");