/*
Problem link: http://www.codewars.com/kata/get-the-middle-character
*/

function getMiddle(s) {
  //Code goes here!
  var len = s.length;
  var mid = len / 2;

  if (len == 1) {
    return s;
  }

  if (len % 2 === 0) {
    return s.substring(Math.trunc(mid) - 1, Math.trunc(mid) + 1);
  }
  return s.substring(Math.trunc(mid), Math.trunc(mid) + 1);
}
