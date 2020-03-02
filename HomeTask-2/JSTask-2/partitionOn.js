/*
Problem link: http://www.codewars.com/kata/partition-on
*/

// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
  var evenItemsCopy = items.filter(pred);
  var oddItemsCopy = items.filter(
    function(value) {
      return !pred(value);
    }
  );

  items.length = 0;

  items.push(...oddItemsCopy);
  items.push(...evenItemsCopy);

  return oddItemsCopy.length;
}
