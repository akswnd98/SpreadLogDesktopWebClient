import TestStatic from './Test/static';
import styles from '../index.scss';

const stylesElement = document.createElement('style');
stylesElement.textContent = styles.toString();
document.head.appendChild(stylesElement);

const root = document.getElementById('root')!;
root.appendChild(TestStatic.generate());
