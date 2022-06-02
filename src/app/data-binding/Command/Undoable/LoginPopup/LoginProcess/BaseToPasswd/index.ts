import PasswdState from '@/src/app/data-binding/State/LoginPopup/LoginProcess/Passwd';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import StateTransitionCommand from '@/src/owl-data-binding/Command/Undoable/StateTransition';
import InputWrapper from '@/src/app/App/LoginPopup/Body/Left/Process/LoginProcess/InputWrapper/inversified';

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
  }

  async unexecute () {
    this.inputWrapper.slideInputToPrev('passwd-input-wrapper', 'email-input-wrapper');
  }

  generateNextState () {
    return new PasswdState();
  }
}
