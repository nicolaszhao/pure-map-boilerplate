import * as api from 'api'; 
import Loading from 'components/Loading';
import style from './home.scss';

class App {
  constructor(props) {
    this.el = document.getElementById('app');
    this.el.innerHTML = this.html();
    this.loading = new Loading(this.el.querySelector(`.${style.content}`));

    this.mount();
  }

  mount() {
    this.loading.show();

    api.getUser()
      .then(data => {
        data = JSON.stringify(data, null, 2);
        this.el.querySelector(`.${style.content}`).innerHTML = `
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
        <h1 class="${style.title}">Home</h1>
        <div class="${style.content}"></div>
      </div>
    `;
  }
}

export default App;
