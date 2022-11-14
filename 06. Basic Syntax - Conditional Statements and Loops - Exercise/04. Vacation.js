function vacation(groupNum, typeOfGroup, dayOfWeek) {
  let totalPrice = 0;
  if (typeOfGroup === 'Students') {
    if (dayOfWeek === 'Friday') {
      totalPrice = groupNum * 8.45;
    } else if (dayOfWeek === 'Saturday') {
      totalPrice = groupNum * 9.8;
    } else if (dayOfWeek === 'Sunday') {
      totalPrice = groupNum * 10.46;
    }
    if (groupNum >= 30) {
      totalPrice = totalPrice * 0.85;
    }
  } else if (typeOfGroup === 'Business') {

    if (groupNum >= 100) {
        groupNum -= 10;
    }
    if (dayOfWeek === 'Friday') {
      totalPrice = groupNum * 10.90;
    } else if (dayOfWeek === 'Saturday') {
      totalPrice = groupNum * 15.60;
    } else if (dayOfWeek === 'Sunday') {
      totalPrice = groupNum * 16;
    }
  } else if (typeOfGroup === 'Regular') {
    if (dayOfWeek === 'Friday') {
      totalPrice = groupNum * 15;
    } else if (dayOfWeek === 'Saturday') {
      totalPrice = groupNum * 20;
    } else if (dayOfWeek === 'Sunday') {
      totalPrice = groupNum * 22.50;
    }
    if (groupNum >= 10 && groupNum <= 20) {
      totalPrice = totalPrice * 0.95;
    } 
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40,"Regular","Saturday");
vacation(100,"Business","Saturday");