function passwordReset(input) {
    let pass = input.shift();
    let command = input.shift();

    while (command !== 'Done') {
        let curLine = command.split(' ');
        let action = curLine[0];
        switch (action) {
            case 'TakeOdd':
                let takeOddPass = ''; //!!! Внимавай !!!!
                for (let index = 0; index < pass.length; index++) {
                    let curChar = pass[index];
                    if(index % 2 !== 0){
                        takeOddPass += curChar; 
                    }                   
                }
                console.log(takeOddPass);
                pass = takeOddPass;
                break;
            case 'Cut':
                let index = Number(curLine[1]);
                let lengthCut = Number(curLine[2]);
                //let cutChar = takeOddPass.slice(index, takeOddPass.length - lengthCut);
                let cutChar = pass.substring(index, index + lengthCut); //15  15 + 3
                pass = pass.replace(cutChar, '');
                console.log(pass);
                break;
            case 'Substitute':
                let find = curLine[1];
                let repl = curLine[2];

                if (pass.includes(find)) {
                    let replaceAllF = pass;
                    while (replaceAllF.indexOf(find) >= 0) {
                        replaceAllF = replaceAllF.replace(find, repl);
                    }
                    pass = replaceAllF;
                    console.log(pass);
                } else {
                    console.log(`Nothing to replace!`);
                }
                break;
        }
        command = input.shift();
    }
    console.log(`Your password is: ${pass}`);
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);
// passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
//     "TakeOdd",
//     "Cut 18 2",
//     "Substitute ! ***",
//     "Substitute ? .!.",
//     "Done"]);
