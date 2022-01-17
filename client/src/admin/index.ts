import EBAdmin from './EBAdmin';
import EBContextMenuPopupSingleton from '../EBContextMenuPopup/singleton';
import styles from '../index.scss';
import EBNewDialogSingleton from './EBAdmin/EBNewDialog/singleton';
import { container } from './EBAdmin/inversify.config';
import { TYPES } from './EBAdmin/types';
import 'reflect-metadata';

const stylesElement = document.createElement('style');
stylesElement.textContent = styles.toString();
document.head.appendChild(stylesElement);

const root = document.getElementById('root')!;
root.appendChild(container.getNamed<EBAdmin>(TYPES.element, TYPES.namespace));

EBContextMenuPopupSingleton.instance;
document.body.appendChild(EBNewDialogSingleton.instance);
