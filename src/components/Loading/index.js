import './loading.scss';

export default class Loading {
  constructor(container = document.body, options = {}) {
    this.create(container, options);
    this.mounted = false;
    this.visible = false;
  }

  create(container, options) {
    this.el = document.createElement('div');
    this.el.className = 'loading';
    this.el.innerHTML = this.html();
    this.container = container;
    this.options = options;
  }

  mount() {
    this.container.appendChild(this.el);
    this.mounted = true;
  }

  unmount() {
    this.container.removeChild(this.el);
    this.mounted = false;
  }

  html() {
    return `
      <span class="loading-text">Loading...</span>
    `;
  }

  reset() {
    const cls = [
      'loading-enter',
      'loading-enter-active',
      'loading-exit',
      'loading-exit-active'
    ];

    this.el.classList.remove(...cls);
  }

  toggle(visible) {
    if (visible === this.visible) {
      return;
    }

    this.visible = visible;
    clearTimeout(this.animTimer);

    if (visible) {
      if (!this.mounted) {
        this.mount();
      }

      this.animate('enter', () => this.reset());
    } else {
      this.animate('exit', () => {
        this.reset();
        this.unmount();
      });
    }
  }

  animate(state, done) {
    const classNames = this.el.classList,
      duration = this.options.duration || 400;

    if (state === 'enter') {
      if (classNames.contains('loading-exit')) {
        classNames.remove('loading-exit');
      }
    }

    classNames.add(`loading-${state}`);

    this.animTimer = setTimeout(() => {
      this.el.classList.add(`loading-${state}-active`);
      this.animTimer = setTimeout(done, duration);
    });
  }

  show() {
    this.toggle(true);
  }

  hide() {
    this.toggle(false);
  }
}
