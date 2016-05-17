function range(start, end) {
  var rangearray = [];
  for (var x = start; x <= end; x++)
    rangearray.push(x);
  return rangearray;
};

function sum(rangearray) {
  var total = 0;
  for (var x = 0; x < rangearray.length; x++)
    total += rangearray[x];
  return total;
};
