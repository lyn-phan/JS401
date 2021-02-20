// <!-- # Part I: Hoisting

// *Note: Before getting started on these exercises, please be certain that you've read through the root [README.md](../README.md) file in this repository.*

// In order to complete these exercises, open [repl.it](https://repl.it/), choose JavaScript, and then write your code in the left-hand panel. You can run your code using the "Run" button.

// ### Two Forms of Functions

```js
// function declaration
function square(x) {
  return x * x;
}

// function expression
var square = function(x) {
  return x * x;
};
```

### Exercises ###

// ### Basic Requirements

// #### Rewrite Functions -->

// <!-- Rewrite the following *function declarations* using a *function expression*: -->

 <!-- ```js -->
 <!-- // 1. -->
 function cube(x) {
   return x * x * x;
 }

var cube = function(x) {
  return x * x * x;
}

 // 2.
 function fullName(first, last) {
   return first + " " + last;
 }

 var fullName = function(first, last) {
   return first + " " + last;
 }

 // 3.
 function power(base, exp) {
   if (exp === 0) {
     return 1;
   }
   return base * power(base, exp - 1);
 }

 var power = function(base, exp) {
   if (exp === 0) {
     return 1;
   }
   return base * power(base, exp - 1);
 }

 // 4.
 function sumCubes(numbers) {
   var total = 0;
   for (var i = 0; i < numbers.length; i++) {
     total = total + cube(numbers[i]);
   }
   return total;
 }

var sumCubes = function(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}


 ```
#### Mechanics of Hoisting ####

// Type out your best answers to the following questions:

1. Why does JavaScript output `undefined` instead of throwing an error in the following code?

  ```js
  console.log(message);

  var message = 'Hi there!';
  ```
 ###  The variable 'message' is hoisted and exists at the time it is console.logged. ###

2. Why does JavaScript throw an error instead of logging `undefined` in the following code?

    ```js
    console.log(message);

    let message = 'Hi there!';
    ```
### Same as last question: the variable 'message' is hoisted and already exsits at the time it is console.logged. The 'let' variable gives more flexibility rather than throwing an error.

3. Explain precisely what happens when the following code is executed.

    ```js
    console.log(showMessage());

    var showMessage = function(){
      return 'Hi there!';
    };
    ```
    ### There will be an error because function declarations get hoisted, while function expressions do not. ###

4. Why does JavaScript *not* throw any errors when the following code is executed?

  ```js
  console.log(showMessage());

  function showMessage(){
    return 'Hi there!';
  }
  ```

  ### There aren't any errors because the function declaration gets hoisted along with the associated value ### 

  
#### Code Restructuring ####

Restructure the following instances of code to work correctly:

 ```js
 // 1.
 for(var i = 0; i < values.length; i++){
   console.log(values[i]);
 }

 var values = [10, 20, 30];
 ```
 ```js

### fixed ###
var values = [10, 20, 30];

for(var i = 0; i < values.length; i++) {
  console.log(values[i]);
}

 // 2.
 console.log(welcome('Charlie', 'Munger'));

 function welcome(first, last) {
   return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
 };

 var lastLogin = '1/1/1970';

 ```

### fixed ###

var lastLogin = '1/1/1970';

console.log(welcome('Charlie', 'Munger'));

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};

