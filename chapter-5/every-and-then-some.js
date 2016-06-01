function every(array, action) {
  for (var i = 0; i < array.length; i++) {
  	if (action(array[i]) == false)
      return false;
  };
  return true;
};

function some(array, action) {
  for (var i = 0; i < array.length; i++) {
  	if (action(array[i]) == true)
      return true;
  };
  return false;
};
