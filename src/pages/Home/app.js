import { delayTask } from '@totebox/util';
import Loading from '../../components/Loading';
import * as api from '../../api';
import './index.scss';

async function refresh(root, props) {
  const { loading } = props;
  const clearLoadingTask = delayTask(() => loading.show());
  const render = (html) => {
    root.querySelector('.content').innerHTML = html;
  };

  render('Loading...');

  try {
    const data = await api.fetchUser();
    const items = Object.keys(data)
      .map((field) => `
        <dt>${field}</dt>
        <dd>${data[field]}</dd>
      `)
      .join('');

    render(`
      <dl class="profile">${items}</dl>
    `);
  } catch (err) {
    render(`
      <p class="error"><strong>Error:</strong> ${err.message}</p>
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
      <h1>Home</h1>
      <section class="content">
      </section>
      <footer>
        <ul>
          <li>
            <button class="button refresh">Refresh</button>
          </li>
          <li>
            <a class="link" href="./about.html">to About</a>
          </li>
        </ul>
      </footer>
    </div>
  `;

  refresh(root, { loading });

  root.querySelector('.refresh')
    .removeEventListener('click', handleRefresh);

  root.querySelector('.refresh')
    .addEventListener('click', handleRefresh, false);
}
