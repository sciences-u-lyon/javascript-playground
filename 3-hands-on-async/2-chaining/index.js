(function() {
  'use strict';

  const asyncGreetings = new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello, World!');
    }, 500);
  });

  function toUpperCase(str) {
    // Return `str` with uppercase characters only
  }
  function reverse(str) {
    // Return `str` in reverse order: "HELLO" -> "OLLEH"
  }
  function display(str) {
    // Display `str` in console
  }

  /*
  ==============================================================================================
  👉 Implement functions above
  👉 From `asyncGreetings` promise, apply above functions and display "!DLROW ,OLLEH" in console
  👉 Do not modify `asyncGreetings`
  ==============================================================================================
  */

}());
