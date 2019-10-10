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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (number >= 5) {
          resolve(successMessage(number));
        } else {
          reject(errorMessage(number));
        }
      }, 100);
    });
  }

  /*
  ===========================================================
  👉 Call validate function with `randomNumber()` as argument
  👉 Display success message with `console.log`
  👉 Display error message with `console.error`
  👉 Refresh browser a few times until you see both messages
  ===========================================================
  */
  validate(randomNumber())
    .then(console.log, console.error);

  const fatalPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve('💀💀💀');
    }, 100);
  });

  /*
  =======================================
  👉 Handle `fatalPromise` error
  👉 Display "💀💀💀" with `console.error`
  👉 Do not modify code above
  =======================================
  */
  fatalPromise.then(skulls => {
    throw new Error(skulls)
  })
  .catch(console.error);

}());
