function popFront(array) {
  // var first = array[0];

  // // what happens here? 

  // for (var index = 0; index < array.length; index++) {
  //   array[index] = array[index + 1];
  // }

  // array.pop();

  // return first;
  return removeAt(array, 0);
}

var numbers = [1, 2, 3, 4, 45, 5, 6];
popFront(numbers);


function removeAt(array, position) {
  var content = array[position];

  for (var index = position; index < array.length; index++) {

    array[index] = array[index + 1];
  }

  array.pop();
  return content;
}

removeAt(numbers, 3);


function pushFront(array, value) {
  // array.shift(value);

  // for (var index = array.length; index > 0; index--) {
  //   // console.log("array is ", array, index);
  //   array[index] = array[index - 1];
  // }

  // array[0] = value;
  


  // return array;

  return insertAt(array, 0, value);
}

// pushFront(numbers, 9999);


function insertAt(array, position, value) {

  for (var index = array.length; index > position; index--) {
    console.log("array is ", array, index);

    array[index] = array[index - 1];
  }
  array[position] = value;
  

  return array;
}

// console.log(insertAt(numbers, 3, -75));


/**
 * Swap positions of successive pairs of values of given array. 
 * If length is odd, do not change the final element. For [1,2,3,4], 
 * return [2,1,4,3]. For example, change input ["Brendan",true,42] to 
 * [true,"Brendan",42]. As with all array challenges, do this without 
 * using any built-in array methods.
 */

function swapPairs(array) {
  for (var index = 1; index < array.length; index += 2) {
    // if (index % 2 !== 0) {
      console.log('index is ' + index, array);
      swap(array, index, index - 1);
    // }
  }

  // console.log(array);
  return array;
}

function swap(array, position1, position2) {
  var temp = array[position1];
  array[position1] = array[position2];
  array[position2] = temp;

  return array;
}

console.log(swapPairs(['cat', 45, 'cow', 9999, 'mouse', 3456, 'horse']));