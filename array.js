const array = [1, 2, 1, 3, 4, 3, 5];

function returnReoccuring(input) {
  for ( let i = 0; i < input.length; i++) {
    for ( let j = 1; j < input.length; j++) {
      if(input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;

}


function returnReoccuring2(input) {
  let map = {}
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined ) {
      return input[i] ;
    } else {
      return map[input[i]] = i;
    }
  }
  // console.log(map);
  return undefined
}

console.log(returnReoccuring2([1, 2, 1, 3, 4, 3, 5]));



