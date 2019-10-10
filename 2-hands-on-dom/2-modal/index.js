(function() {
  'use strict';

  function Modal(imgSrc) {
    this.fragment = document.createDocumentFragment();

    this.modalOverlay = document.createElement('div');
    this.modalOverlay.className = 'modal-overlay';

    this.modalContent = document.createElement('div');
    this.modalContent.className = 'modal-content';

    this.modalImg = document.createElement('img');
    this.modalImg.src = imgSrc;
    this.modalImg.className = 'modal-img';

    this.closeButton = document.createElement('button');
    this.closeButton.className = 'close-button';
    this.closeButton.innerHTML = '<i class="fa fa-times fa-3x"></i>';
    this.closeButton.onclick = () => this.close();
  }

  Modal.prototype.open = function() {
    this.modalContent.appendChild(this.modalImg);
    this.modalContent.appendChild(this.closeButton);
    this.fragment.appendChild(this.modalOverlay);
    this.fragment.appendChild(this.modalContent);
    document.body.appendChild(this.fragment);
  }

  Modal.prototype.close = function () {
    document.body.removeChild(this.modalOverlay);
    document.body.removeChild(this.modalContent);
  }

  const imgs = document.querySelectorAll('.poster');
  imgs.forEach(img => {
    img.onclick = () => {
      const modal = new Modal(img.attributes.src.value);
      modal.open();
    };
  });

}());
