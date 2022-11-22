function wordTracker(array){
    let words = array.shift().split(' ');
    let result = {};
    
    for (const word of words) {
        result[word] = 0;
    }
    for (const word of array) {
        if(result.hasOwnProperty(word)){
            result[word]++;
        }
    }
    //console.log(result);
    let sortedResult = Object.entries(result);
    sortedResult.sort((a, b) => b[1] - a[1]);
    //console.log(sortedResult[0][1]);
    for (const [word, quantity] of sortedResult) {
        console.log(`${word} - ${quantity}`);
    }
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]);