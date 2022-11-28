function secretChat(input) {
    let text = input.shift();
    let command = input.shift();
    
    while (command != 'Reveal') {
        let args = command.split(':|:');
        let curCommand = args[0];
        switch (curCommand) {
            case 'InsertSpace':
                let index = args[1];
                text = text.substring(0, index) + ' ' + text.substring(index);
                console.log(text);
                break;
            case 'Reverse':
                let action = args[1];
                if(text.includes(action)){
                    text = text.replace(action, '');
                    let reversed = action.split('').reverse().join('');
                    text = text + reversed;
                    console.log(text);
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':
                let find = args[1];
                let repl = args[2];
                //let  newText = text.replace(find, repl); ДЖЪДЖЪ НЕ РАБОТИ С REPLACEALL()!!!!!!!!!!!
                let replaceAllDolor = text;
                while(replaceAllDolor.indexOf(find) >= 0) {
                    replaceAllDolor = replaceAllDolor.replace(find, repl);
                }
                text = replaceAllDolor;
                console.log(text);
            break;
        }
        command = input.shift();
    }
    console.log(`You have a new text message: ${text}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]);
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);