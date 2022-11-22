// 3. Extract File
// Write a function that receives a single string - the path to a file (the '\' character is escaped)
// Your task is to subtract the file name and its extension. 
// (Beware of files like template.bak.pptx, as template.bak 
//  should be the file name, while pptx is the extension).

function extractFile(input){
    let intputArray = input.split('\\'); //сплитваме стринга по \\ и го превръщаме в масив
    let lastEl = intputArray.pop(); // взимаме последният елемент от масива (Template.pptx)

    let lstComma = lastEl.lastIndexOf('.'); //намираме последният индекс където има точка .
    let fileName = lastEl.substring(0, lstComma); //отделеме имато от разширението (.pptx) като започваме от индех 0 до индекса на точката
    let extension = lastEl.substring(lstComma + 1); //взимаме разширението на файла , но за да изрежем точката добавяме да започне от + 1 и остава (pptx)

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');