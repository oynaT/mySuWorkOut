function printAndSum(startNum, endNum) {
    let sum = 0;
    let output = '';
    for (let curNum = startNum; curNum <= endNum; curNum++) {
        sum += curNum;
        output += `${curNum} `;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);