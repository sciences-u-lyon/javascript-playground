import { createStore } from './store.js';
import reducer from './reducer.js';

const store = createStore(reducer);
store.subscribe(update);

store.dispatch({ type: 'INIT' });

const searchInput = document.querySelector('[name="search-input"]');
searchInput.oninput = $event => {
  const keywords = $event.target.value.toUpperCase();
  store.dispatch({ type: 'SEARCH', keywords });
};

function update() {
  const imgs = document.querySelectorAll('img');
  const state = store.getState();
  state.images.forEach((img, index) => {
    imgs[index].className = img.class;
  });
}
