(function() {
  'use strict';

  const p1 = new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 200);
  });
  const p2 = new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, 200);
  });
  const p3 = new Promise(resolve => {
    setTimeout(() => {
      resolve(3);
    }, 200);
  });

  /*
  =============================================
  👉 Display sum of p1, p2, p3 resolved numbers
  👉 p1, p2, p3 should not be chained
  =============================================
  */

  Promise.all([p1, p2, p3]).then(numbers => {
    const sum = numbers.reduce((sum, current) => sum += current);
    console.log('sum is', sum);
  });

}());
