// 6. Pascal-Case Splitter
// You will receive a single string.
// This string is written in PascalCase format. Your task here is to split this string by every word in it.
// Print them joined by comma and space.

function pascalCaseSplitter(string){

    let result = string[0]; //Взимаме първата буква от стринга (S)
    let lowerText = string.toLowerCase(); //обръщаме целият стринг да е с малки букви

    for (let index = 1; index < string.length; index++) { //правим цикъл, който да обхода по дължината и ще сравняваме 2-та стринга 
        let curCh = string[index]; // буквата на текущият индекс
        if(curCh !== lowerText[index]){ // сравняваме дали текъщата буква от стринга с големи букви е различна от текущата буква от стринга с малки бъкви , ако ..
            result += ', '; // ако е различна разделяме със запетая
        }
        result += curCh; //ако не е я добавяме към резултата
    }
    console.log(result);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');