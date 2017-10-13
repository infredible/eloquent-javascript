// The Sum of a Range
function range(start, end, step) {

  var array = [];
  if (step && step < 0) {
    for (var i = start; i>= end; i=i+step)
      array.push(i);

  }else {

  for (var i = start; i <= end; i++) {
    array.push(i);
  }
  }

  return array;
}

function sum(array){
  var sumValue = 0;
  for (var i = 0; i < array.length; i++){
    sumValue += array[i];
  }

  return sumValue
}

//console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
//console.log(sum(range(1, 10)));
// → 55
