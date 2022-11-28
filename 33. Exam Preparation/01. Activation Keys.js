function activationKeys(input) {
    let acKey = input.shift();
    let instructions = input.slice();

    let instruction = instructions.shift();

    while (instruction != 'Generate') {
        let args = instruction.split('>>>');
        let instName = args.shift();
        
        switch (instName) {
            case 'Contains':
                let substring = args[0];
                if(acKey.includes(substring)){
                    console.log(`${acKey} contains ${substring}`);
                }else {
                    console.log(`Substring not found!`);
                }
                break;
            case 'Flip':
                let uppLow = args[0];
                let startIndex = args[1];
                let endIndex = args[2];

                if(uppLow === 'Upper'){
                   let substingUp = acKey.substring(startIndex, endIndex);
                   acKey = acKey.replace(substingUp,substingUp.toUpperCase());
                   console.log(`${acKey}`);
                }else {
                    let substingLow = acKey.substring(startIndex, endIndex);
                    acKey = acKey.replace(substingLow,substingLow.toLowerCase());
                    console.log(`${acKey}`);
                }
                break;
            case 'Slice':
                let startIndexS = args[0];
                let endIndexS = args[1];
                let substringSlice = acKey.substring(startIndexS, endIndexS);
                   acKey = acKey.replace(substringSlice, '');
                console.log(`${acKey}`);
                break;
        }

        instruction = instructions.shift();
    }
    console.log(`Your activation key is: ${acKey}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);