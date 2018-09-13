import * as api from 'api'; 
import Loading from 'components/Loading';
import './home.scss';

class App {
  constructor() {
    this.el = document.getElementById('app');
    this.el.innerHTML = this.html();
    this.loading = new Loading();

    this.mount();
  }

  mount() {
    this.loading.show();

    api.getUser()
      .then(data => {
        data = JSON.stringify(data, null, 2);
        this.el.querySelector('.content').innerHTML = `
          <pre>
            ${data}
          </pre>
        `;
      })
      .catch(err => console.error(err))
      .then(() => this.loading.hide());
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
