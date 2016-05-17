function countChar(string, char) {
  	var counted = 0;
  	for (var count = 0; count < string.length; count++)
      if (string.charAt(count) == char)
        counted = counted + 1;
    return counted;
};

function countBs (string) {
  return countChar(string, "B")
};
