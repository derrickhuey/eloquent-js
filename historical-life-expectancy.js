var groupByCentury = ancestry.map(function(person) {
  return Math.ceil(person.died / 100);
});
console.log(groupByCentury);
