import EBApp from '.';
import Style from '../EBAttribute/Style';
import styles from './index.scss';

export default class Static {
  static generate () {
    return new EBApp({
      attributes: [new Style({ styles: styles.toString() })],
    });
  }
}
