
// 4. Party Time

// There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. 

// When guests come to the party check if he/she contains in any of the two reservation lists.

// The input will come as an array of strings. You will be given the list with the guests before you receive a command "PARTY".

// All VIP numbers start with a digit.

// When you receive the command "PARTY", the guests start coming.

// Print the count of guests then all guests, who didn't come to the party (VIP must be printed first).

// Hint: Guest names are not unique. Only the first match is removed when receiving a name.


function partyTime(array) {

    let vipGuest = [];

    let defaultGuest = [];

    let command = array.shift();

    while (command !== 'PARTY') {

        if (isVip(command)) {
            vipGuest.push(command);

        } else {
            defaultGuest.push(command);

        }
        command = array.shift();

    }

    for (i = 0; i < array.length; i++) {

        if (isVip(array[i])) {
            vipGuest.splice(vipGuest.indexOf(array[i]), 1);

        } else {
            defaultGuest.splice(defaultGuest.indexOf(array[i]), 1);
        }
    }    

    function isVip(guest) {

        let isVip = !isNaN(guest[0]);

        if (isVip) {
            return true;

        }
        return false;

    }
    allGuest = vipGuest.concat(defaultGuest);
    console.log(allGuest.length);

    console.log(allGuest.join('\n'));
   
   
    // if(vipGuest.length){
    // console.log(vipGuest.join('\n'));
    // }
    // if(defaultGuest.length){
    // console.log(defaultGuest.join('\n'));
    // }

    
}
partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);
partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ']);