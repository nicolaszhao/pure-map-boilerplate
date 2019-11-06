import './index.scss';

export default function App() {
  const root = document.getElementById('app');

  root.innerHTML = `
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
