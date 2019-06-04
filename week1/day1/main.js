// comment in the file
// var index;
var myString = 'this is a string';

myString = 234234;

// console.log(myString);
// offset from the beginning
//             0      1       2       3
var array = ['dog', 'cat', 'horse', 'mouse'];

if (array.push(myString) >= 5) {
  // console.log('we ahve moore than 5');
}

// console.log('before', index);

// for (const index = 0; index < array.length; index++) {
//   console.log('content at index', array[index]);
// }
// console.log('after', index);

// for (var index in array) {
//   console.log('index is :::', array[index]);
// }

// for (var element of array) {
//   console.log('element is :::', element);
// }

// index 0 is iq
// var person = [34, 5.6, 'brown', 'brown'];

function sayHello(name = 'NO NAME', ...rest) {
  // console.log(rest);
  // name = name || 'bob';
  // if (name === undefined) {
  //   name = 'bob';
  // }

  console.log('Hello ' + persons.name);
}




var person = {
  name: 'Bobbbbbbbbb',
  iq: 34,
  money: 5.6,
  shows: 'brown', 
  belt: 'brown',
  eye_color: 'blue',
  key: 'value'
};

person.hair = 'pink';
// person['eye-color'] = 'blue';
// console.log(person);

// console.log(person.money);

// for (var key in person) {
//   console.log('key is ', key, person[key]);
// }



sayHello('Bob', true, false, 234324, {});
