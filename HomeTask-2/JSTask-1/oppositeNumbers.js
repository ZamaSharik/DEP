
/*

Problem Link: http://www.codewars.com/kata/opposite-number

*/

function opposite(number) {
  if(number > 0){
    return -Math.abs(number);
  }
  return Math.abs(number);
}
