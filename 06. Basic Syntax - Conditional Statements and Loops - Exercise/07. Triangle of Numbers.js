function triangleOfNumbers(number) {
    for (let i = 1; i <= number; i++) { //въртин цикъла до въведеното число 3,5,10
        let row = '';
        for (let j = 1; j <= i; j++) { //Въртим до i за да можем да изписваме всяка цифра по 1 път спрямо броя 
            row += `${i} `;
        }
        console.log(row)
    }
}
triangleOfNumbers(5);