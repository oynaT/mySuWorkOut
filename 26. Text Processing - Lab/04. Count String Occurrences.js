function countStringOccurrences(text, word) {
    let count = text.split(' ').filter(w => w === word).length;
    console.log(count);

    // let count = 0;
    // let index = 0;
    // while (index >= 0) {
    //     count++;
    //     index = text.indexOf(word, index + 1)
    // }
    // console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence', 'is');