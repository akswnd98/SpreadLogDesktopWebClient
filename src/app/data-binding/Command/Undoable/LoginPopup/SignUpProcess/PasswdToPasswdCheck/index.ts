import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import StateTransitionCommand from '@/src/owl-data-binding/Command/Undoable/StateTransition';
import InputWrapper from '@/src/app/App/LoginPopup/Body/Left/Process/SignUpProcess/InputWrapper/inversified';
import PasswdCheckState from '@/src/app/data-binding/State/LoginPopup/SignUpProcess/PasswdCheck';
import PasswdValidChecker from '@/src/common/logic/PasswdValidChecker';
import Static from '@/src/app/inversify.config';
import Getter from '@/src/app/data-binding/Operator/CurrentSignUpPasswd/Getter';
import { SYMBOLS } from '@/src/app/symbols';
import SignUpProcess from '@/src/app/App/LoginPopup/Body/Left/Process/SignUpProcess';

export type ConstructorParam = {
  element: SignUpProcess;
  inputWrapper: InputWrapper;
};

@injectable()
export default class PasswdToPasswdCheck extends StateTransitionCommand {
  protected element: SignUpProcess;
  protected inputWrapper: InputWrapper;
  protected passwdValidChecker: PasswdValidChecker;

  constructor (@unmanaged() payload: ConstructorParam) {
    super();
    this.element = payload.element;
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
      (this.element.shadowRoot!.getElementById('passwd-rule')! as HTMLDivElement).classList.remove('inactive', 'active');
      (this.element.shadowRoot!.getElementById('passwd-rule')! as HTMLDivElement).classList.add('inactive');
    } catch (e) {
      console.log(e);
      throw Error('SignUpProcessPasswdToPasswdCheck.execute failed');
    }
  }

  async unexecute () {
    this.inputWrapper.slideInputToPrev('passwd-check-input-wrapper', 'passwd-input-wrapper');
    (this.element.shadowRoot!.getElementById('passwd-rule')! as HTMLDivElement).classList.remove('inactive', 'active');
    (this.element.shadowRoot!.getElementById('passwd-rule')! as HTMLDivElement).classList.add('active');
  }

  generateNextState () {
    return new PasswdCheckState();
  }
}
