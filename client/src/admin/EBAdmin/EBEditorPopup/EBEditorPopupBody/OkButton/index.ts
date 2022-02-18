import EBButton from '@/src/EBButton';
import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export default class OkButton extends EBButton {
  constructor () {
    super({
      text: 'ok',
      width: '100px',
      height: '50px',
      borderRadius: '20px',
      backgroundColor: 'red',
    });
  }
}

customElements.define('eb-editor-popup-body-ok-button', OkButton);
