import EBApp from './EBApp';
import styles from '../index.scss';
import ContainerStatic from './inversify.config';
import { SYMBOLS } from './types';

(async () => {
  const container = await ContainerStatic.getInstance();

  const stylesElement = document.createElement('style');
  stylesElement.textContent = styles.toString();
  document.head.appendChild(stylesElement);

  const root = document.getElementById('root')!;
  root.appendChild(container.get<EBApp>(SYMBOLS.EBApp));
})();
