import PasswdState from '@/src/app/data-binding/State/LoginPopup/SignUpProcess/Passwd';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import StateTransitionCommand from '@/src/owl-data-binding/Command/Undoable/StateTransition';
import InputWrapper from '@/src/app/App/LoginPopup/Body/Left/Process/SignUpProcess/InputWrapper/inversified';
import axios from 'axios';
import Static from '@/src/app/inversify.config';
import Getter from '@/src/app/data-binding/Operator/CurrentSignUpEmail/Getter';
import { SYMBOLS } from '@/src/app/symbols';
import SignUpProcess from '@/src/app/App/LoginPopup/Body/Left/Process/SignUpProcess';

export type ConstructorParam = {
  element: SignUpProcess;
  inputWrapper: InputWrapper;
};

@injectable()
export default class BaseToPasswd extends StateTransitionCommand {
  protected element: SignUpProcess;
  protected inputWrapper: InputWrapper;

  constructor (@unmanaged() payload: ConstructorParam) {
    super();
    this.element = payload.element;
    this.inputWrapper = payload.inputWrapper;
  }

  async execute () {
    try {
      const email = Static.instance.get<Getter>(SYMBOLS.CurrentSignUpEmailGetter).get();
      const rst = await axios.get('/api/account/email/signup/checkEmailAvailable', { params: { email } });
      if (!rst.data.available) {
        throw Error('email already exist');
      }
      this.inputWrapper.slideInputToNext('email-input-wrapper', 'passwd-input-wrapper');
      (this.element.shadowRoot!.getElementById('passwd-rule')! as HTMLDivElement).classList.remove('inactive', 'active');
      (this.element.shadowRoot!.getElementById('passwd-rule')! as HTMLDivElement).classList.add('active');
    } catch (e) {
      console.log(e);
      throw Error('SignUpProcessBaseToPasswdCommand.execute failed');
    }
  }

  async unexecute () {
    this.inputWrapper.slideInputToPrev('passwd-input-wrapper', 'email-input-wrapper');
    (this.element.shadowRoot!.getElementById('passwd-rule')! as HTMLDivElement).classList.remove('inactive', 'active');
    (this.element.shadowRoot!.getElementById('passwd-rule')! as HTMLDivElement).classList.add('inactive');
  }

  generateNextState () {
    return new PasswdState();
  }
}
