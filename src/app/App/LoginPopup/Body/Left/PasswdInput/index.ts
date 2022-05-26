import Element from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import BaseInput from '../BaseInput';
import FocusHandler from './Handler/Focus';
import FocusOutHandler from './Handler/FocusOut';

@injectable()
export default class PasswdInput extends BaseInput {
  constructor () {
    super({
      defaultValue: '비밀번호',
    });
    this.registerAttribute(new FocusHandler({ baseInput: this }));
    this.registerAttribute(new FocusOutHandler({ baseInput: this, defaultValue: this.defaultValue }));
  }
}

customElements.define('login-popup-passwd-input', PasswdInput);
