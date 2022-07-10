const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for (let i= 0; i < length; i++) {
    for(let j = 0; j < length; j++) {
      // swap smaller value 
      if(array[i + 1] < array[i]) {
        let val = array[i];
        array[i] = array[i + 1]
        array[i + 1] = val;
      }
      
    }
  }
  
}

selectionSort(numbers);
console.log(numbers)

// ANOTHER WAY OF SELECTION SORTING 
const numbers1 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++){
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for(let j = i+1; j < length; j++){
      if (array[j] < array[min]){
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers1);
// console.log(numbers1);


