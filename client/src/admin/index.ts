import EBAdmin from './EBAdmin';
import EBAdminStatic from './EBAdmin/static';
import styles from '../index.scss';

const stylesElement = document.createElement('style');
stylesElement.textContent = styles.toString();
document.head.appendChild(stylesElement);

customElements.define('eb-admin', EBAdmin);

const root = document.getElementById('root')!;
root.appendChild(EBAdminStatic.generateEBApp());
