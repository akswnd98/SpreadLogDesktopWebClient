import EBApp from '.';
import Style from '../EBAttribute/Style';
import styles from './index.scss';

export default class EBAppStatic {
  static generateEBApp () {
    return new EBApp({
      attributes: [new Style({ styles: styles.toString() })],
    });
  }
}
