import EBAdmin from './EBAdmin';
import styles from '../index.scss';
import EBGraphVisContextMenuPopup from '@/src/admin/EBAdmin/EBGraphVis/ContextMenuPopup/singleton';
import EBNewDialogPopupSingleton from './EBAdmin/EBNewDialogPopup/singleton';
import 'reflect-metadata';

const stylesElement = document.createElement('style');
stylesElement.textContent = styles.toString();
document.head.appendChild(stylesElement);

const root = document.getElementById('root')!;
root.appendChild(new EBAdmin());

EBGraphVisContextMenuPopup.instance;
document.body.appendChild(EBNewDialogPopupSingleton.instance);
