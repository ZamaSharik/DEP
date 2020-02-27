/*
  Problem Link: http://www.codewars.com/kata/calculating-with-functions
*/

function zero(functionAsArgument) {
  if (functionAsArgument === undefined){ return 0; }
  return functionAsArgument(0);
}

function one(functionAsArgument) {
  if (functionAsArgument === undefined) { return 1; }
  return functionAsArgument(1);
}

function two(functionAsArgument) {
  if (functionAsArgument === undefined ){ return 2; }
  return functionAsArgument(2);
}

function three(functionAsArgument) {
  if (functionAsArgument === undefined){ return 3; }
  return functionAsArgument(3);
}

function four(functionAsArgument) {
  if (functionAsArgument === undefined ){ return 4; }
  return functionAsArgument(4);
}

function five(functionAsArgument) {
  if (functionAsArgument === undefined ){return 5;}
  return functionAsArgument(5);
}

function six(functionAsArgument) {
  if (functionAsArgument === undefined ){return 6;}
  return functionAsArgument(6);
}

function seven(functionAsArgument) {
  if (functionAsArgument === undefined ){ return 7; }
  return functionAsArgument(7);
}

function eight(functionAsArgument) {
  if (functionAsArgument === undefined) { return 8; }
  return functionAsArgument(8);
}

function nine(functionAsArgument) {
  if (functionAsArgument === undefined ){ return 9; }
  return functionAsArgument(9);
}

function plus(secondNum) {
  return function(firstNum) { return firstNum + secondNum; }
}

function minus(secondNum) {
  return function(firstNum) { return firstNum - secondNum; }
}

function times(secondNum) {
  return function(firstNum){ return firstNum*secondNum; }
}

function dividedBy(secondNum) {
  return function(firstNum){ return Math.floor(firstNum/secondNum); }
}
