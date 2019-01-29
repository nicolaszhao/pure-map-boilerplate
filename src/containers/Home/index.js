import '../polyfills';
import 'config/public-path';
import 'assets/base.scss';
import App from './app';

new App();

if (module.hot) {
  module.hot.accept('./app', () => {
    new App();
  });
}
