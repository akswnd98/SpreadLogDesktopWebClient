import EBApp from './EBApp';
import styles from '../index.scss';
import ContainerStatic from './inversify.config';
import { SYMBOLS } from './types';
import { SYMBOLS as BasicSYMBOLS } from '../types';
import LoginPopup from './EBApp/LoginPopup';
import PostGraph from '../data-binding/Model/PostGraph';

(async () => {
  const container = await ContainerStatic.getInstance();

  const stylesElement = document.createElement('style');
  stylesElement.textContent = styles.toString();
  document.head.appendChild(stylesElement);

  const root = document.getElementById('root')!;
  root.appendChild(container.get<EBApp>(SYMBOLS.EBApp));

  document.body.appendChild(container.get<LoginPopup>(SYMBOLS.LoginPopup));
})();
