function worldTour(input) {
    let stops = input.shift();

    let command = input.shift();
    while (command !== 'Travel') {
        let args = command.split(':');
        let action = args[0];
        switch (action) {
            case 'Add Stop':
                let index = Number(args[1]);
                let str = args[2];
                if (index >= 0 && index < stops.length) {
                    stops = stops.substring(0, index) + str + stops.substring(index);
                }
                console.log(stops);
                break;
            case 'Remove Stop':
                let startIndex = Number(args[1]);
                let endIndex = Number(args[2]);
                if ((startIndex >= 0 && startIndex < stops.length) && (endIndex >= startIndex && endIndex < stops.length)) {
                    let cutpart = stops.substring(startIndex, endIndex + 1);
                    stops = stops.replace(cutpart, '');
                }
                console.log(stops);
                break;
            case 'Switch':
                let newStr = args[1];
                let oldStr = args[2];
                while (!stops.includes(oldStr)) {
                    stops = stops.replace(newStr, oldStr);
                    console.log(stops);
                    break;
                }
                break;
        }
        command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"]);
