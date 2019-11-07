import './index.scss';

export default function App() {
  const root = document.getElementById('app');

  root.innerHTML = `
    <div class="container">
      <h1>About</h1>
      <section>
        <p>This is a pure multi-page boilerplate.</p>
        <a class="button" href="./">Back to Home</a>
      </section>
    </div>
  `;
}
