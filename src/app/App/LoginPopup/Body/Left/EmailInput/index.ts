import Element from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import BaseInput from '../BaseInput';

@injectable()
export default class EmailInput extends BaseInput {
  constructor () {
    super({
      defaultValue: '이메일',
    });
  }
}

customElements.define('login-popup-email-input', EmailInput);
