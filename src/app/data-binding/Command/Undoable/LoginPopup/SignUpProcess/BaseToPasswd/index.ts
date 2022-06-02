import PasswdState from '@/src/app/data-binding/State/LoginPopup/SignUpProcess/Passwd';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import StateTransitionCommand from '@/src/owl-data-binding/Command/Undoable/StateTransition';
import InputWrapper from '@/src/app/App/LoginPopup/Body/Left/Process/SignUpProcess/InputWrapper/inversified';
import axios from 'axios';
import Static from '@/src/app/inversify.config';
import Getter from '@/src/app/data-binding/Operator/CurrentSignUpEmail/Getter';
import { SYMBOLS } from '@/src/app/symbols';

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
    try {
      const email = Static.instance.get<Getter>(SYMBOLS.CurrentSignUpEmailGetter).get();
      const rst = await axios.get('/api/account/email/signup/checkEmailAvailable', { params: { email } });
      if (!rst.data.available) {
        throw Error('email already exist');
      }
      this.inputWrapper.slideInputToNext('email-input-wrapper', 'passwd-input-wrapper');
    } catch (e) {
      console.log(e);
      throw Error('SignUpProcessBaseToPasswdCommand.execute failed');
    }
  }

  async unexecute () {
    this.inputWrapper.slideInputToPrev('passwd-input-wrapper', 'email-input-wrapper');
  }

  generateNextState () {
    return new PasswdState();
  }
}
