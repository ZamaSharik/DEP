/*
Problem link: http://www.codewars.com/kata/basic-mathematical-operations
*/

function basicOp(operation, value1, value2) {

  var operationResult;
  switch (operation) {
    case '+':
      operationResult = value1 + value2;
      break;
    case '-':
      operationResult = value1 - value2;
      break;
    case '*':
      operationResult = value1 * value2;
      break;
    case '/':
      operationResult = value1 / value2;
      break;
  }
  return operationResult;

}
