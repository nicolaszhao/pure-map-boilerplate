import { delayTask } from 'tote-box';
import Loading from 'components/Loading';
import * as api from 'api'; 
import './index.scss';

class App {
  constructor() {
    this.root = document.getElementById('app');
    this.root.innerHTML = this.html();
    this.loading = new Loading();

    this.mount();
  }

  mount() {
    const clearLoadingTask = delayTask(() => this.loading.show());

    api.fetchUser()
      .then(data => {
        const items = Object.keys(data)
          .map(field => {
            return `
              <dt>${field}</dt>
              <dd>${data[field]}</dd>
            `;
          })
          .join('');
        
        this.root.querySelector('.content').innerHTML = `
          <dl>${items}</dl>
        `;
      })
      .catch(err => console.error(err))
      .then(() => {
        if (!clearLoadingTask()) {
          this.loading.hide();
        }
      });
  }
  
  html() {
    return `
      <div class="container">
        <header class="header">
          <h1>Home</h1>
        </header>
        <div class="content"></div>
      </div>
    `;
  }
}

export default App;
