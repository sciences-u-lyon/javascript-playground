import { createStore } from './store.js';
import reducer from './reducer.js';

const store = createStore(reducer);
store.subscribe(update);

/* Dispatch `INIT` action */

/* Dispatch `SEARCH` action with keywords, from search input */

function update() {
  /* Implement update function: add current state (images class) to img tags */
}
