import { delayTask } from '@totebox/util';
import Loading from '../../components/Loading';
import * as api from '../../api';
import './app.scss';

async function refresh(root, props) {
  const { loading } = props;
  const clearLoadingTask = delayTask(() => loading.show());
  const render = (html) => {
    root.querySelector('.profile-content').innerHTML = html;
  };

  try {
    const data = await api.fetchUser();
    const items = Object.keys(data)
      .map((field) => `
        <dt>${field}:</dt>
        <dd>${data[field]}</dd>
      `)
      .join('');

    render(`
      <dl>${items}</dl>
    `);
  } catch (err) {
    render(`
      <p class="error"><strong>Error:</strong>${err.message}</p>
    `);
  } finally {
    if (!clearLoadingTask()) {
      loading.hide();
    }
  }
}

export default function App() {
  const root = document.getElementById('app');
  const loading = new Loading();
  const handleRefresh = () => refresh(root, { loading });

  root.innerHTML = `
    <div class="container">
      <h1>Pure MPA Boilerplate</h1>
      <nav class="nav">
        <ul>
          <li>
            <a href="./" class="active">Home</a>
          </li>
          <li>
            <a href="./about.html">About</a>
          </li>
        </ul>
      </nav>
      <section class="content">
        <h2>Home</h2>
        <div class="profile">
          <h3>User Profile</h3>
          <div class="profile-content"></div>
          <footer class="profile-footer">
            <button type="button" class="button refresh">Refresh</button>
          </footer>
        </div>
      </section>
    </div>
  `;

  refresh(root, { loading });

  root.querySelector('.refresh')
    .removeEventListener('click', handleRefresh);

  root.querySelector('.refresh')
    .addEventListener('click', handleRefresh, false);
}
