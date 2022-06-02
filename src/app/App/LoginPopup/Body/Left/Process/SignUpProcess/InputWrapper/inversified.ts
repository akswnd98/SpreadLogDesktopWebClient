import InputWrapper from '.';
import 'reflect-metadata';
import { injectable } from 'inversify';
import BaseInput from '../../BaseInput';
import PasswdInput from '../../PasswdInput';
import EmailInputInputHandler from './Handler/EmailInput/Input';
import PasswdInputInputHandler from './Handler/PasswdInput/Input';
import PasswdCheckInputInputHandler from './Handler/PasswdCheckInput/Input';
import NicknameInputInputHandler from './Handler/NicknameInput/Input';

@injectable()
export default class Inversified extends InputWrapper {
  constructor ()  {
    super({
      emailInput: new BaseInput({
        defaultValue: '이메일',
        attributes: [
          new EmailInputInputHandler(),
        ],
      }),
      passwdInput: new PasswdInput({
        defaultValue: '비밀번호',
        attributes: [
          new PasswdInputInputHandler(),
        ],
      }),
      passwdCheckInput: new PasswdInput({
        defaultValue: '비밀번호 확인',
        attributes: [
          new PasswdCheckInputInputHandler(),
        ],
      }),
      nicknameInput: new BaseInput({
        defaultValue: '닉네임',
        attributes: [
          new NicknameInputInputHandler(),
        ],
      }),
    });
  }
}

customElements.define('sign-up-process-input-wrapper-inversified', Inversified);
