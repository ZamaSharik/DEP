/*
Problem link: http://www.codewars.com/kata/word-count
*/

function countWords(str) {

  var str = str.trim();
  if (str.length === 0) {
    return 0;
  }

  return str.split(/[\s]+/).length;
}
