# `quickfunc`

Your package to grab some functions quickly!

## Current update adds...

`clean();` is now removed from the package.

`sortArray();` now uses QuickSort instead of BubbleSort to make it faster.

We are now supporting vanilla javascript! All functions for this support are in `vanilla.js` (https://raw.githubusercontent.com/realguystuff/quickfunc/master/vanilla.js).

## How do I use `quickfunc`?

The documentation below refers to the functions. If you are getting an error, please refer back to this page.

### `sortArray();`

This function checks your array and sorts the numbers using ~~BubbleSort~~ QuickSort.

If there is a number in a string, it will still sort it. If there is a string without numbers or mixed numbers with characters, it will keep it in the same place.

`sortArray(<array>, [reverse]);`

The second option is a boolean. It's default is false. If you set it to true, the array will be sorted and will be reversed. 

### `checkArray();`

This function gets your array, and removes the elements that are not the type of element that you specified.

```js
const { checkArray } = require('quickfunc');

const array = ['hi!', false, 'another hi!', 69, 42, ['array in an array', 'yeah right'], { cow: 'moo', banyard_blitz: 'I\'m pretty sure it\'s animal-y in here' }, true];

console.log(checkArray(array, 'number')); // [69, 42];
console.log(checkArray(array, 'object')); // [{ cow: 'moo', banyard_blitz: 'I\'m pretty sure it\'s animal-y in here' }];
console.log(checkArray(array, 'array')); // [['array in an array', 'yeah right']];
console.log(checkArray(array, 'string')); // ['hi!', 'another hi!'];
console.log(checkArray(array, 'boolean')); // [false, true];
```

Usage: `checkArray(<array>, <type>);`

~~It should be noted that in the example above, when you choose `'object'`, it also kept the array. It is because Javascript does not have a `typeof 'array'` because arrays are classified as objects.~~

If you are looking for objects, it will now yield objects **only** without the arrays.

### `reverseArray();`

This function gets the array and reverses the array.

Usage: `reverseArray(<array>)`

### `averageArray();`

This function runs through the array for you, and gives you the average of the numbers in it.

Fun fact: This works with numbers in strings! Also, if you add a string without a number in it (numbers with letters are included),
it will stay in its position.

The usage is `averageArray(<array>)`

### `randomArray();`

This function runs through the array for you, and gives you a random value in that array. If you're dealing with objects with arrays in them, you can use the optional parameter.

The usage is: `randomArray(<array>);`

### `oddEven();`

This tells you if your number is odd or even. This is particularly useful if you are dealing with inputs. [^limits1]

Usage: `oddEven(<number>);`

### `prime();`

Heres a chart on what will the function do: [^limits2]

if prime: returns true  
if divisible by 2: returns 2  
if divisible by 3: returns 3  
if divisible by 5: returns 5  
if divisible by 7: returns 7

Usage: `oddEven(<number>);`

[^limits1]:
    Very high numbers will most likely to return even.

[^limits2]:
    Very high numbers will most likely to return 2.