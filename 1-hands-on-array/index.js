(function() {
  'use strict';

  try {
    const tvShows = [
      { title: 'Black Mirror', rate: 96 },
      { title: 'Breaking Bad', rate: 95 },
      { title: 'Game Of Thrones', rate: 94 },
      { title: 'Jessica Jones', rate: 92 },
      { title: 'Stranger Things', rate: 94 },
      { title: 'The Walking Dead', rate: 81 }
    ];


    /*
    ==================================================
    👉 From `tvShows`, get an array of TV shows titles
    👉    - for loop is forbidden
    👉    - Array.prototype.forEach is forbidden
    ==================================================
    */

    /* ✍️ Write your code here */
    const upperCaseTitles = tvShows.map(tvs => tvs.title.toUpperCase());;

    let result = [
      'BLACK MIRROR',
      'BREAKING BAD',
      'GAME OF THRONES',
      'JESSICA JONES',
      'STRANGER THINGS',
      'THE WALKING DEAD'
    ];

    assert(_.isEqual(upperCaseTitles, result), '`upperCaseTitles` assertion failed!');



    /*
    ==========================================================================
    👉 From `tvShows`, get an array of TV shows where rate is greater than 93%
    👉    - for loop is forbidden
    👉    - Array.prototype.forEach is forbidden
    ==========================================================================
    */

    /* ✍️ Write your code here */
    const greaterThan93 = tvShows.filter(tvs => tvs.rate > 93);

    result = [
      { title: 'Black Mirror', rate: 96 },
      { title: 'Breaking Bad', rate: 95 },
      { title: 'Game Of Thrones', rate: 94 },
      { title: 'Stranger Things', rate: 94 }
    ];

    assert(_.isEqual(greaterThan93, result), '`greaterThan93` assertion failed!');



    /*
    ==================================================
    👉 From `tvShows`, get the average rate percentage
    👉    - for loop is forbidden
    👉    - Array.prototype.forEach is forbidden
    ==================================================
    */

    /* ✍️ Write your code here */
    let averageRate = tvShows.reduce(
      (averageRate, current) => averageRate += current.rate,
      0
    ) / tvShows.length;

    assert(averageRate === 92, '`averageRate` assertion failed!');



    /*
    ========================================================================
    👉 Implement the `tvShows.sortBy` function:
    👉    - 1st argument is object field
    👉    - 2nd argument (optional) is sort order: 'asc' (default) or 'desc'
    👉    - `tvShows` should not be mutated
    ========================================================================
    */

    Array.prototype.sortBy = function(property, order) {
      const items = this.slice();
      items.sort(function(a, b) {
        /* ✍️ Write your code here */
        const reverse = order === 'desc' ? -1 : 1;
        if (a[property] > b[property]) {
          return reverse * 1;
        }
        if (a[property] < b[property]) {
          return reverse * -1;
        }
        return 0;
      });
      return items;
    };

    result = [
      { title: 'The Walking Dead', rate: 81 },
      { title: 'Jessica Jones', rate: 92 },
      { title: 'Game Of Thrones', rate: 94 },
      { title: 'Stranger Things', rate: 94 },
      { title: 'Breaking Bad', rate: 95 },
      { title: 'Black Mirror', rate: 96 }
    ];

    const sortedByRate = tvShows.sortBy('rate');

    assert(_.isEqual(sortedByRate, result), '`sortedByRate` assertion failed!');

    result = [
      { title: 'The Walking Dead', rate: 81 },
      { title: 'Stranger Things', rate: 94 },
      { title: 'Jessica Jones', rate: 92 },
      { title: 'Game Of Thrones', rate: 94 },
      { title: 'Breaking Bad', rate: 95 },
      { title: 'Black Mirror', rate: 96 }
    ];

    const sortedByTitleDesc = tvShows.sortBy('title', 'desc');

    assert(_.isEqual(sortedByTitleDesc, result), '`sortedByTitleDesc` assertion failed!');



    console.log('%c 👏👏👏 All assertions passed!', 'font-size:18px;background:green;color:white');
  }
  catch (e) {
    console.log(`%c 😱😱😱 ${e.message}`, 'font-size:18px;background:red;color:white');
  }
}());
