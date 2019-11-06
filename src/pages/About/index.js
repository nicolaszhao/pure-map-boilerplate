import '../index';
import App from './app';

App();

if (module.hot) {
  module.hot.accept('./app', () => {
    App();
  });
}
