import EBApp from '.';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';

export default class EBAdminStatic {
  static generateEBApp () {
    return new EBApp({
      attributes: [new Style({ styles: styles.toString() })],
    });
  }
}
