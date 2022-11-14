function theatrePromotions(typeOfDay, age) {
    let price = 0;
    if (typeOfDay == 'Weekday') {
        if (age >= 0 && age <= 18 || age > 64 && age <= 122) {
            price = 12;
        }else if (18 < age && age <= 64){
            price = 18;
        }
    } else if (typeOfDay == 'Weekend') {
        if (age >= 0 && age <= 18 || age > 64 && age <= 122) {
            price = 15;
        } else if (age > 18 && age <= 64) {
            price = 20;
        }
    } else if (typeOfDay == 'Holiday') {
        if (age >= 0 && age <= 18) {
            price = 5;
        }else if (18 < age && age <= 64){
            price = 12;
        }  else if (64 < age && age <= 122)
        {
            price = 10;
        }
    } 
    if (price != 0) {
        console.log(price + '$');
    } else {
        console.log('Error!');
    }
}
theatrePromotions('Holiday', 15);