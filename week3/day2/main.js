

function printArray(array) {
  console.log('printing array');
  for (var index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}
var a = [0, 1, 2, 3, 4, 5, 6, 7];
// printArray(a);
/** 
 * 1) base case 
 * 2) forward progress
 * 3) recursion
*/

function printR(array, index) {
  if (index === undefined) {
    index = 0;
  }
  console.log(`index is ${index}`);
  // base case 
  if (index >= array.length) {
    console.log('hit base case, exiting');
    return;
  }
  // this is the action or point of the function
  console.log(`value is ${array[index]}`);

  // forward progress
  index++;

  printR(array, index);

  console.log('exiting stack frame');
}

// printR(a.reverse());

/** 
 * 
 * 
Write a recursive function that given a number returns the sum of integers from 1 to that number.
Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
*/
/** 
 * 1) base case 
 * 2) forward progress
 * 3) recursion
*/
function rSigma(num) {
  console.log("calling rSigma" + num);
  // var sum = 0;

  if (num <= 0) {
    return 0;
  }

  return rSigma(num - 1) + Math.floor(num);
  // console.log(`returning sum :: ${sum}`);
  // return sum;
}

console.log(rSigma(5.5));


/** 
 * Given num, return the product of ints from 1 up to num. 
 * If less than zero, treat as zero. If not an integer, truncate. 
 * Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
 * 
*/

function rFact(n) {
  if (n <= 1) {
    return 1;
  }

  return  rFact(n - 1) * Math.floor(n);
  // console.log('prod is ' + prod);

  // return prod;
}

console.log(rFact(3.5));