import styles from '../index.scss';
import 'reflect-metadata';
import Login from './Login';

(async () => {
  const stylesElement = document.createElement('style');
  stylesElement.textContent = styles.toString();
  document.head.appendChild(stylesElement);

  const root = document.getElementById('root')!;
  root.appendChild(new Login());
})();
