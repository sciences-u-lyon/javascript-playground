(function() {
  'use strict';

  function randomNumber() {
    return Math.floor((Math.random() * 10) + 1);
  }

  const successMessage = number => `🙌 number ${number} is valid!`;
  const errorMessage = number => `⚠️ number ${number} is invalid!`;

  function validate(number) {
    /*
    ================================================
    👉 Return a Promise (after 100 ms timeout) that:
      - resolve `successMessage` when `number` >= 5
      - reject `errorMessage` when `number` < 5
    ================================================
    */
  }

  /*
  ===========================================================
  👉 Call validate function with `randomNumber()` as argument
  👉 Display success message with `console.log`
  👉 Display error message with `console.error`
  ===========================================================
  */

  const fatalPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve('💀💀💀');
    }, 100);
  });
  fatalPromise.then(skulls => {
    throw new Error(skulls)
  });

  /*
  =======================================
  👉 Handle `fatalPromise` error
  👉 Display "💀💀💀" with `console.error`
  👉 Do not modify code above
  =======================================
  */

}());
