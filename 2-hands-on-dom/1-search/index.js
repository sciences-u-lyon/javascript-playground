(function() {
  'use strict';

  const imgs = document.querySelectorAll('.poster');

  const searchInput = document.querySelector('[name="search-input"]');
  searchInput.oninput = $event => {
    const value = $event.target.value;

    const keywords = value.toUpperCase();
    imgs.forEach(img => {
      img.classList.remove('is-hidden');
      if (keywords.length > 2) {
        const imgKeywords = img.dataset.keywords.toUpperCase();
        if (!imgKeywords.includes(keywords)) {
          img.classList.add('is-hidden');
        } else {
          img.classList.remove('is-hidden');
        }
      }
    });
  };

}());
