import PasswdState from '@/src/app/data-binding/State/LoginPopup/LoginProcess/Passwd';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import StateTransitionCommand from '@/src/owl-data-binding/Command/Undoable/StateTransition';
import InputWrapper from '@/src/app/App/LoginPopup/Body/Left/Process/LoginProcess/InputWrapper/inversified';
import { waitFor } from '@/src/owl-util';

export type ConstructorParam = {
  inputWrapper: InputWrapper;
};

@injectable()
export default class BaseToPasswd extends StateTransitionCommand {
  protected inputWrapper: InputWrapper;

  constructor (@unmanaged() payload: ConstructorParam) {
    super();
    this.inputWrapper = payload.inputWrapper;
  }

  async execute () {
    this.inputWrapper.slideInputToNext('email-input-wrapper', 'passwd-input-wrapper');
    await waitFor(1000);
    (this.inputWrapper.passwdInput.shadowRoot!.getElementById('input-box')! as HTMLInputElement).focus();
  }

  async unexecute () {
    this.inputWrapper.slideInputToPrev('passwd-input-wrapper', 'email-input-wrapper');
    await waitFor(1000);
    (this.inputWrapper.emailInput.shadowRoot!.getElementById('input-box')! as HTMLInputElement).focus();
  }

  generateNextState () {
    return new PasswdState();
  }
}
