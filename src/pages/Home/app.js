import { delayTask } from '@totebox/util';
import Loading from '../../components/Loading';
import * as api from '../../api';
import './index.scss';

export default function App() {
  const root = document.getElementById('app');
  const loading = new Loading();
  const clearLoadingTask = delayTask(() => loading.show());

  root.innerHTML = `
    <div class="container">
      <header class="header">
        <h1>Home</h1>
      </header>
      <div class="content"></div>
    </div>
  `;

  api.fetchUser()
    .then((data) => {
      const items = Object.keys(data)
        .map((field) => `
          <dt>${field}</dt>
          <dd>${data[field]}</dd>
        `)
        .join('');

      root.querySelector('.content').innerHTML = `
        <dl>${items}</dl>
      `;
    })
    .catch((err) => console.error(err))
    .then(() => {
      if (!clearLoadingTask()) {
        loading.hide();
      }
    });
}
