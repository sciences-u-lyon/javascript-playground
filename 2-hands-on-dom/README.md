# Hands-on DOM

## 1/ search

#### Implement a search feature that filters TV shows images by title

---

- Each `<img>` tag in `index.html` is a TV show poster. It contains a `data-keywords` attribute to store the TV show title
- The page header contains an `<input>` tag that should be used to filter the images list by typing a TV show title
- An `<img>` tag can be *filtered out* from the list by adding the class `is-hidden`
- Code should be written in `index.js` using DOM APIs only

## 2/ modal

#### Implement a modal box that displays a TV show poster

---

- The modal should be composed of:
  - An overlay `<div>` (use class `modal-overlay`)
  - A content `<div>` (use class `modal-content`)
  - An `<img>` tag (use class `modal-img`) to display the TV show poster (within content `<div>`)
  - A close `<button>` (use class `close-button`) with inner HTML as: `<i class="fa fa-times fa-3x"></i>` for icon
- The modal should be opened on `<img>` click
- The modal should be closed on close button click
- Code should be written in `index.js` using DOM APIs only

## 3/ redux (advanced)

#### Implement the search feature in 1/ with redux pattern

---

- In this exercise, we're using ECMAScript modules: `<script type="module" src="index.js"></script>` in `index.html`
- **We need Chrome 61+ or Firefox 54+** (with `dom.moduleScripts.enabled` activated in `about:config`)
- Also, because module scripts are requested with CORS, we need to serve the working directory with a http server:
  - Install `live-server`: `npm install -g live-server`
  - Start server at `2-hands-on-dom` directory root (`assets` need to be included): `live-server`
  - Go to `http://127.0.0.1:8080/3-redux/` (live reload is enabled)
- Start hacking `index.js` and `reducer.js`
