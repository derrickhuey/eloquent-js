function arrayToList(input) {
  var list = {};
  for (var i = input.length - 1; i >= 0; i--) {
    list.push("{value: " + input[i] + ", rest: restvar")
  };
};
