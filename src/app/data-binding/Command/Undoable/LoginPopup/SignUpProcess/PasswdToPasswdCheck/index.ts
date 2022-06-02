import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import StateTransitionCommand from '@/src/owl-data-binding/Command/Undoable/StateTransition';
import InputWrapper from '@/src/app/App/LoginPopup/Body/Left/Process/SignUpProcess/InputWrapper/inversified';
import PasswdCheckState from '@/src/app/data-binding/State/LoginPopup/SignUpProcess/PasswdCheck';
import PasswdValidChecker from '@/src/common/logic/PasswdValidChecker';
import Static from '@/src/app/inversify.config';
import Getter from '@/src/app/data-binding/Operator/CurrentSignUpPasswd/Getter';
import { SYMBOLS } from '@/src/app/symbols';

export type ConstructorParam = {
  inputWrapper: InputWrapper;
};

@injectable()
export default class PasswdToPasswdCheck extends StateTransitionCommand {
  protected inputWrapper: InputWrapper;
  protected passwdValidChecker: PasswdValidChecker;

  constructor (@unmanaged() payload: ConstructorParam) {
    super();
    this.inputWrapper = payload.inputWrapper;
    this.passwdValidChecker = new PasswdValidChecker();
  }

  async execute () {
    try {
      const curPasswd = Static.instance.get<Getter>(SYMBOLS.CurrentSignUpPasswdGetter).get();
      if (!this.passwdValidChecker.check(curPasswd)) {
        throw Error('passwd not valid');
      }
      this.inputWrapper.slideInputToNext('passwd-input-wrapper', 'passwd-check-input-wrapper'); 
    } catch (e) {
      console.log(e);
      throw Error('SignUpProcessPasswdToPasswdCheck.execute failed');
    }
  }

  async unexecute () {
    this.inputWrapper.slideInputToPrev('passwd-check-input-wrapper', 'passwd-input-wrapper');
  }

  generateNextState () {
    return new PasswdCheckState();
  }
}
