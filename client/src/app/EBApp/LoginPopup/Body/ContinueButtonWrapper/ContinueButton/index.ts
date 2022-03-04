import EBButton from '@/src/EBButton';
import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export default class ContinueButton extends EBButton {
  constructor () {
    super({
      text: 'Continue',
      borderRadius: '20px',
      backgroundColor: 'black',
      color: 'white',
      width: '230px',
      height: '100%',
    });
  }
}

customElements.define('login-popup-body-continue-button', ContinueButton);
