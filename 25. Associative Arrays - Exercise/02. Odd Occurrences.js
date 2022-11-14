// 2. Odd Occurrences
// Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.

//'Java C# Php PHP Java PhP 3 C#     ->  3 1 5 C#' c# php 1 5
//'Cake IS SWEET is Soft CAKE sweet Food'  ->  soft food

function oddOccurrences(words) {
    let results = {};
    let allWords = words
    .split(' ')
    .map(w => w.toLowerCase());

    for (let i = 0; i < allWords.length; i++) {
        if (!results.hasOwnProperty(allWords[i])) {
            results[allWords[i]] = [];
        }
        results[allWords[i]].push(i);
    }

    let sortedResults = Object.entries(results).sort((a, b) => a[1][0] - b[1][0]);

    resultOutput = '';

    for (const el of sortedResults) {

        if (el[1].length % 2 !== 0) {
            resultOutput += `${el[0]} `
        }
    }
    console.log(resultOutput);

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');