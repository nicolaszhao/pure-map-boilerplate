import './index.scss';

class App {
  constructor() {
    this.root = document.getElementById('app');
    this.root.innerHTML = this.html();
  }

  html() {
    return `
      <div class="container">
        <header class="header">
          <h1>About</h1>
        </header>
        <section class="content">
          <a href="./">Home</a>
        </section>
      </div>
    `;
  }
}

export default App;
