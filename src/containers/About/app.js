import './about.scss';

class App {
  constructor() {
    this.el = document.getElementById('app');
    this.el.innerHTML = this.html();
  }

  html() {
    return `
      <div class="container">
        <header class="header">
          <h1>About</h1>
        </header>
      </div>
    `;
  }
}

export default App;
