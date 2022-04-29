# quickfunc

Your place to grab some functions quickly!

## Current update adds...

Fixed the problem with `prime();`, because if the number is not divisible with 3, it won't return anything. Also, we added a new parameter to `clean();`. Details below.

## How to use quickfunc

First things first, we must know how to use these functions. Currently, there are three functions, and we will know how to use them.

### randomArray();

This function runs through the array for you, and gives you a random value in that array. If you're dealing with objects with arrays in them, you can use the optional parameter.

The usage is:

```
// at the top of your file
const { randomArray } = require('quickfunc');

// using a variable
const index = randomArray(array);
const index1 = randomArray(array, object);

// function inside of a function
myFunction(randomArray(array));
myFunction(randomArray(array, object));

// return
return randomArray(array);
return randomArray(array, object);
```

`randomArray(<array>, [object]);`

### oddEven();

This tells you if your number is odd or even. This is particularly useful if you are dealing with inputs.

Usage:

```
// at the top of your file
const { oddEven } = require('quickfunc');

// using a variable
const index = oddEven(number);

// function inside of a function
myFunction(oddEven(number));

// return
return oddEven(number);
```

`oddEven(<number>);`

### prime();

Heres a chart on what will the function do:


if prime: returns true

if divisible by 2: returns 2

if divisible by 3: returns 3

if divisible by 5: returns 5

if divisible by 7: returns 7


The correct usage:

```
// at the top of your file
const { prime } = require('quickfunc');

// using a variable
const index = prime(number);

// function inside of a function
myFunction(prime(number));

// return
return prime(number);
```

`oddEven(<number>);`

### clean();

This function cleans your text. It will do things like, removing some `@` and the very next character of it. This ensures that some hidden things not to be displayed.

The current usage:

```
// at the top of your file
const { clean } = require('quickfunc');

// using a variable
const index = clean(value);
const index1 = clean(value, replace);

// function inside of a function
myFunction(clean(value));
myFunction(clean(value, replace));

// return
return clean(value);
return clean(value, replace);
```

`clean(<value>, [replace])`