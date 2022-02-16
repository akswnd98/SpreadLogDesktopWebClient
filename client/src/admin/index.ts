import EBAdmin from './EBAdmin/inversified';
import styles from '../index.scss';
import 'reflect-metadata';
import ContainerStatic from './inversify.config';
import { SYMBOLS } from './types';
import EBNewDialogPopup from './EBAdmin/EBNewDialogPopup';

(async () => {
  const container = await ContainerStatic.getInstance();

  const stylesElement = document.createElement('style');
  stylesElement.textContent = styles.toString();
  document.head.appendChild(stylesElement);

  const root = document.getElementById('root')!;
  root.appendChild(container.get<EBAdmin>(SYMBOLS.EBAdmin));

  // EBGraphVisContextMenuPopup.instance;
  // document.body.appendChild(EBNewDialogPopupSingleton.instance);
  document.body.appendChild(container.get<EBNewDialogPopup>(SYMBOLS.EBNewDialogPopup));
})();
