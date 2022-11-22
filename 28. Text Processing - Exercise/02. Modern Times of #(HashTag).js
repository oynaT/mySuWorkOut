// 2. Modern Times of #(HashTag)
// The input will be a single string.
// Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed.
// Finally, print out all the special words you found without the label (#) on a new line.

function modernTimesOfHashTag(input) {

    let words = input.split(' ');

    for (const word of words) {

        let isVailidW = word.startsWith('#') && words.length > 1;
        if (isVailidW) {
            
            let isLetter = true;
            let temp = '';
            
            for (let index = 1; index < word.length; index++) {
                const char = word[index].toLowerCase();

                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isLetter = false
                    break;
                } else {
                    temp += word[index];
                }
            }
            if (isLetter) {
                console.log(temp);
            }
        }
    }

}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');