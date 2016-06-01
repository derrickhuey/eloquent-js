var flatten = function(flat, current) {
  return flat.concat(current)
};
console.log(arrays.reduce(flatten));
