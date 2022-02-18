import EBButton from '@/src/EBButton';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import Handler from './Handler';

@injectable()
export default class CancelButton extends EBButton {
  constructor () {
    super({
      text: 'cancel',
      width: '100px',
      height: 'calc(100% - 1px)',
      borderRadius: '20px',
      backgroundColor: 'red',
      attributes: [
        new Style({ styles: styles.toString() }),
        new Handler({ id: 'root' }),
      ],
    });
  }
}

customElements.define('eb-editor-popup-body-cancel-button', CancelButton);
