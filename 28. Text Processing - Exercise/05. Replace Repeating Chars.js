// 5. Replace Repeating Chars
// Write a function that receives a single string and replace any sequence of the same letters with a single corresponding letter.

function replaceRepeatingChars(input) {
    // let firstCh = string[0];
    let result = input[0]; // взимаме първият индекс а и към него ще добавяме всички останали букви
    for (let index = 1; index < input.length; index++) { //започваме цикъла от 1 защото вече имам 0 индекс в резултата
        let curEl = input[index]; //текущият индекс
        let prevEl = input[index - 1]; // предходният индек
        if (curEl !== prevEl) { // сравняваме дали на текущият индекс елемента съвпата с предишният индекс и ако са различни добавяме в резултата
            result += curEl; // добавяме в стринга
        }
    }
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');