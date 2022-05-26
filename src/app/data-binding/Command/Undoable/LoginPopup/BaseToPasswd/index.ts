import Left from '@/src/app/App/LoginPopup/Body/Left';
import PasswdState from '@/src/app/data-binding/State/LoginPopup/Passwd';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import LoginPopupCommand from '..';

export type ConstructorParam = {
  left: Left;
};

export default class BaseToPasswd extends LoginPopupCommand {
  left: Left;

  constructor (payload: ConstructorParam) {
    super();
    this.left = payload.left;
  }

  async execute () {
    this.executeClientSide();
  }

  async unexecute () {
    const emailDiv = this.left.shadowRoot!.getElementById('email-input-wrapper')! as HTMLDivElement;
    const passwdDiv = this.left.shadowRoot!.getElementById('passwd-input-wrapper')! as HTMLDivElement;
    emailDiv.classList.remove(
      'input-wrapper-slide-from-right',
      'input-wrapper-slide-to-left',
      'input-wrapper-slide-from-left',
      'input-wrapper-slide-to-right',
    );
    emailDiv.classList.add('input-wrapper-slide-from-left');
    passwdDiv.classList.remove(
      'input-wrapper-slide-from-right',
      'input-wrapper-slide-to-left',
      'input-wrapper-slide-from-left',
      'input-wrapper-slide-to-right',
    );
    passwdDiv.classList.add('input-wrapper-slide-to-right');
  }

  get nextState () {
    return Static.instance.get<PasswdState>(SYMBOLS.LoginPopupPasswdState);
  }

  protected executeClientSide () {
    const emailDiv = this.left.shadowRoot!.getElementById('email-input-wrapper')! as HTMLDivElement;
    const passwdDiv = this.left.shadowRoot!.getElementById('passwd-input-wrapper')! as HTMLDivElement;
    emailDiv.classList.remove(
      'input-wrapper-slide-from-right',
      'input-wrapper-slide-to-left',
      'input-wrapper-slide-from-left',
      'input-wrapper-slide-to-right',
    );
    emailDiv.classList.add('input-wrapper-slide-to-left');
    passwdDiv.classList.remove(
      'input-wrapper-slide-from-right',
      'input-wrapper-slide-to-left',
      'input-wrapper-slide-from-left',
      'input-wrapper-slide-to-right',
    );
    passwdDiv.classList.add('input-wrapper-slide-from-right');
  }
}
