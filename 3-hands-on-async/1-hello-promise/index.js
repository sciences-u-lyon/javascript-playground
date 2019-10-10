(function() {
  'use strict';

  const asyncGreetings = new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello, World!');
    }, 500);
  });

  /*
  ====================================================================
  👉 From `asyncGreetings` promise, display "Hello, World!" in console
  👉 Do not modify `asyncGreetings`
  ====================================================================
  */
  asyncGreetings.then(greetings => {
    console.log(greetings);
  });

}());
