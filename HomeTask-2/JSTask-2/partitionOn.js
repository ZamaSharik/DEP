/*
Problem link: http://www.codewars.com/kata/partition-on
*/

// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
  var n = items.length;
  var itemsCopy = items.filter(pred);
  var odd = [];
  var item;
  for (item of items) {
    if (!itemsCopy.includes(item)) {
      odd.push(item);
    }
  }
  items.length = 0;
  for (x of odd) {
    items.push(x);
  }
  for (x of itemsCopy) {
    items.push(x);
  }
  return odd.length;
}
