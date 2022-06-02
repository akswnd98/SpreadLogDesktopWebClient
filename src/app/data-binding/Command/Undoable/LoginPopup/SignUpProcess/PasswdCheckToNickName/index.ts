import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import StateTransitionCommand from '@/src/owl-data-binding/Command/Undoable/StateTransition';
import InputWrapper from '@/src/app/App/LoginPopup/Body/Left/Process/SignUpProcess/InputWrapper/inversified';
import NickNameState from '@/src/app/data-binding/State/LoginPopup/SignUpProcess/NickName';
import Static from '@/src/app/inversify.config';
import Getter from '@/src/app/data-binding/Operator/CurrentSignUpPasswd/Getter';
import CheckGetter from '@/src/app/data-binding/Operator/CurrentSignUpPasswdCheck/Getter';
import { SYMBOLS } from '@/src/app/symbols';

export type ConstructorParam = {
  inputWrapper: InputWrapper;
};

@injectable()
export default class PasswdCheckToNickName extends StateTransitionCommand {
  protected inputWrapper: InputWrapper;

  constructor (@unmanaged() payload: ConstructorParam) {
    super();
    this.inputWrapper = payload.inputWrapper;
  }

  async execute () {
    try {
      const curPasswd = Static.instance.get<Getter>(SYMBOLS.CurrentSignUpPasswdGetter).get();
      const curPasswdCheck = Static.instance.get<CheckGetter>(SYMBOLS.CurrentSignUpPasswdCheckGetter).get();
      if (curPasswd !== curPasswdCheck) {
        throw Error('cur passwd != cur passwd check');
      }
      this.inputWrapper.slideInputToNext('passwd-check-input-wrapper', 'nick-name-input-wrapper'); 
    } catch (e) {
      console.log(e);
      throw Error('SignUpProcessPasswdCheckToNickname.execute failed');
    }
  }

  async unexecute () {
    this.inputWrapper.slideInputToPrev('nick-name-input-wrapper', 'passwd-check-input-wrapper');
  }

  generateNextState () {
    return new NickNameState();
  }
}
