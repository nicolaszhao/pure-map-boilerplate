export default function App() {
  const root = document.getElementById('app');

  root.innerHTML = `
    <div class="container">
      <h1>Pure MPA Boilerplate</h1>
      <nav class="nav">
        <ul>
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="./about.html" class="active">About</a>
          </li>
        </ul>
      </nav>
      <section class="content">
        <h2>About</h2>
        <p>This is a Pure Multi-Page Application boilerplate.</p>
      </section>
    </div>
  `;
}
