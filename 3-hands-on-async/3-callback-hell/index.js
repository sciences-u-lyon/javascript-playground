(function() {
  'use strict';

  function addOne(number, callback) {
    setTimeout(() => {
      callback(number + 1);
    }, 100);
  }
  addOne(1, two => {
    addOne(two, three => {
      addOne(three, four => {
        addOne(four, five => {
          console.log(five);
        });
      });
    });
  });

  /*
  ==========================================================================
  👉 Remove callback hell by implementing same pattern as above with Promise
  ==========================================================================
  */

  function asyncAddOne(number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(number + 1);
      }, 100);
    });
  }
  asyncAddOne(1)
    .then(asyncAddOne)
    .then(asyncAddOne)
    .then(asyncAddOne)
    .then(five => {
      console.log(five);
    });

}());
