function reverseArray(input) {
  var newArray = [];
  for (var i = input.length - 1; i >= 0; i--)
    newArray.push(input[i]);
  return newArray;
};
