import InputWrapper from '.';
import 'reflect-metadata';
import { injectable } from 'inversify';
import BaseInput from '../../BaseInput';
import PasswdInput from '../../PasswdInput';
import EmailInputHandler from './Handler/EmailInput/Input';
import PasswdInputHandler from './Handler/PasswdInput/Input';

@injectable()
export default class Inversified extends InputWrapper {
  constructor ()  {
    super({
      emailInput: new BaseInput({
        defaultValue: '이메일',
        attributes: [
          new EmailInputHandler(),
        ],
      }),
      passwdInput: new PasswdInput({
        defaultValue: '비밀번호',
        attributes: [
          new PasswdInputHandler(),
        ],
      }),
    });
  }
}

customElements.define('login-process-input-wrapper-inversified', Inversified);
