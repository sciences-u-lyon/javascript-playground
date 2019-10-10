import { cloneDeep } from './utils.js';

export default function(state = {
  images: [
    { class: 'poster', keywords: 'black mirror' },
    { class: 'poster', keywords: 'breaking bad' },
    { class: 'poster', keywords: 'game of thrones' },
    { class: 'poster', keywords: 'jessica jones' },
    { class: 'poster', keywords: 'stranger things' },
    { class: 'poster', keywords: 'the walking dead' }
  ]
}, action) {
  switch (action.type) {
    case 'SEARCH':
      const images = cloneDeep(state.images);
      images.forEach(img => {
        const imgKeywords = img.keywords.toUpperCase();
        if (action.keywords.length > 2 && !imgKeywords.includes(action.keywords)) {
          img.class = 'poster is-hidden';
        } else {
          img.class = 'poster';
        }
      });
      return { ...state, images };
    case 'INIT':
    default:
      return state;
  }
};
