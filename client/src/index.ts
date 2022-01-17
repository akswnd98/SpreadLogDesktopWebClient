import EBApp from './EBApp';
import EBAppStatic from './EBApp/static';
import styles from './index.scss';

const stylesElement = document.createElement('style');
stylesElement.textContent = styles.toString();
document.head.appendChild(stylesElement);

customElements.define('eb-app', EBApp);

const root = document.getElementById('root')!;
root.appendChild(EBAppStatic.generate());
