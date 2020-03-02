/*
Problem link: http://www.codewars.com/kata/transportation-on-vacation
*/

function rentalCarCost(d) {
  var everyDayCost = 40;
  var discount;

  var totalAmount = d * everyDayCost;

  if(d >= 7) {
    totalAmount = totalAmount - 50;
  }

  else if(d >= 3) {
    totalAmount = totalAmount - 20;
  }
  return totalAmount;
}
