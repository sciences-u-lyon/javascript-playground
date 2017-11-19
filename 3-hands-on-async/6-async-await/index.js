(function() {
  'use strict';

  function respondAfter100ms(x) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (x >= 0) {
          resolve(x);
        } else {
          reject('💀💀💀');
        }
      }, 100);
    });
  }

  function addToSix() {
    let sum = 0;
    return respondAfter100ms(1)
      .then(one => {
        sum += one;
        return respondAfter100ms(2);
      })
      .then(two => {
        sum += two;
        return respondAfter100ms(3);
      })
      .then(four => {
        sum += four;
        return sum;
      });
  }

  addToSix().then(sum => {
    console.log('addToSix returns', sum);
  });

  /*
  ========================================================================
  👉 Rewrite `addToSix` function in a new function with async / await only
  👉 Call the new function and display result (sum) in console.log
  ========================================================================
  */

  function addToThreeWithError() {
    let sum = 0;
    return respondAfter100ms(1)
      .then(one => {
        sum += one;
        return respondAfter100ms(-1);
      })
      .then(null, skulls => {
        console.error('Handling error:', skulls);
        return respondAfter100ms(2)
      })
      .then(two => {
        sum += two;
        return sum;
      });
  }

  addToThreeWithError().then(sum => {
    console.log('addToThreeWithError returns', sum);
  });

  /*
  ===================================================================================
  👉 Rewrite `addToThreeWithError` function in a new function with async / await only
  👉 Call the new function and display result (sum) in console.log
  ===================================================================================
  */

}());
