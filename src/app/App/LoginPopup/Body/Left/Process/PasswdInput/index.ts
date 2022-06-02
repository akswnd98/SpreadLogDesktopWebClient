import 'reflect-metadata';
import { injectable } from 'inversify';
import BaseInput,  { type ConstructorParam as ParentConstructorParam } from '../BaseInput';
import FocusHandler from './Handler/Focus';
import FocusOutHandler from './Handler/FocusOut';

@injectable()
export default class PasswdInput extends BaseInput {
  constructor (payload: ParentConstructorParam) {
    super({
      ...payload,
    });
    this.registerAttribute(new FocusHandler({ baseInput: this }));
    this.registerAttribute(new FocusOutHandler({ baseInput: this, defaultValue: this.defaultValue }));
  }
}

customElements.define('login-popup-passwd-input', PasswdInput);
