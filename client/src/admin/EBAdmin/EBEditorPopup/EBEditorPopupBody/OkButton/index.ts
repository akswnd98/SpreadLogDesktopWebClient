import EBButton from '@/src/EBButton';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';

@injectable()
export default class OkButton extends EBButton {
  constructor () {
    super({
      text: 'ok',
      width: '100px',
      height: 'calc(100% - 1px)',
      borderRadius: '20px',
      backgroundColor: 'red',
      attributes: [ new Style({ styles: styles.toString() }) ],
    });
  }
}

customElements.define('eb-editor-popup-body-ok-button', OkButton);
