
function matchFullNam(input) {
    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g;
    let validNames = [];
    let validName = null;
    while ((validName = pattern.exec(input)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
}
matchFullNam("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");