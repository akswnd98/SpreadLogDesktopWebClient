import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import StateTransitionCommand from '@/src/owl-data-binding/Command/Undoable/StateTransition';
import SignUpConfermed from '@/src/app/data-binding/State/LoginPopup/SignUpProcess/EmailSent';
import Static from '@/src/app/inversify.config';
import NicknameGetter from '@/src/app/data-binding/Operator/CurrentSignUpNickname/Getter';
import { SYMBOLS } from '@/src/app/symbols';
import axios from 'axios';
import PasswdGetter from '@/src/app/data-binding/Operator/CurrentSignUpPasswd/Getter';
import EmailGetter from '@/src/app/data-binding/Operator/CurrentSignUpEmail/Getter';
import SignUpProcessElement from '@/src/app/App/LoginPopup/Body/Left/Process/SignUpProcess';

export type ConstructorParam = {
  element: SignUpProcessElement;
};

@injectable()
export default class NickNameToEmailSent extends StateTransitionCommand {
  protected element: SignUpProcessElement;
  constructor (@unmanaged() payload: ConstructorParam) {
    super();
    this.element = payload.element;
  }

  async execute () {
    const nickname = Static.instance.get<NicknameGetter>(SYMBOLS.CurrentSignUpNicknameGetter).get();
    const email = Static.instance.get<EmailGetter>(SYMBOLS.CurrentSignUpEmailGetter).get();
    const pw = Static.instance.get<PasswdGetter>(SYMBOLS.CurrentSignUpPasswdGetter).get();
    const nicknameAvail = (await axios.get('/api/account/email/signup/checkNicknameAvailable', { params: { nickname } })).data.available;
    if (!nicknameAvail) {
      throw 'nickname already exist';
    }
    const requestRst = (await axios.post('/api/account/email/signup/requestEmailCert', { email, pw, nickname })).data.result;
    if (!requestRst) {
      throw 'request email cert failed';
    }
    this.element.slideToNext('sign-up-process', 'waiting-email-cert');
  }

  async unexecute () {
    this.element.slideToPrev('waiting-email-cert', 'sign-up-process');
  }

  generateNextState () {
    return new SignUpConfermed();
  }
}
