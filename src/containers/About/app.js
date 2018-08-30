import style from './about.scss';

class App {
  constructor() {
    this.el = document.getElementById('app');
    this.el.innerHTML = this.html();
  }

  html() {
    return `
      <div class="container">
        <h1 class="${style.title}">About</h1>
      </div>
    `;
  }
}

export default App;
