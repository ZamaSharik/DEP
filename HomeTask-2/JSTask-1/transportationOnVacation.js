/*
Problem link: http://www.codewars.com/kata/transportation-on-vacation
*/

function rentalCarCost(days) {
  var everyDayCost = 40;
  var discount;

  var totalAmount = days * everyDayCost;

  if (days >= 7) {
    totalAmount -= 50;
  } else if (days >= 3) {
    totalAmount -= 20;
  }

  return totalAmount;
}
