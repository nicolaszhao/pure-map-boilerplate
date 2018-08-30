import style from './loading.scss';

export default class Loading {
  constructor(container = document.body, options = {}) {
    this.el = document.createElement('div');
    this.el.className = style.wrapper;
    this.el.innerHTML = this.html();
    this.options = options;

    container.appendChild(this.el);
    this.mount();
  }

  mount() {
    this.hide();
  }

  html() {
    return `
      <span>Loading...</span>
    `;
  }

  show() {
    this.el.style.display = 'inline-block';
  }

  hide() {
    this.el.style.display = 'none';
  }
}
