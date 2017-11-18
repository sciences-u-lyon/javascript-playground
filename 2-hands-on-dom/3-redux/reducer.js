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
    /* Return new state for each action type */
  }
};
