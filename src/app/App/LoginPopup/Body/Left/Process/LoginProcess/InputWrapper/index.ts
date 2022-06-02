import RawInputWrapper, { ConstructorParam as ParentConstructorParam } from '../../InputWrapper';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import { html, render } from 'lit-html';
import BaseInput from '../../BaseInput';
import PasswdInput from '../../PasswdInput';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';

export type ConstructorParam = {
  emailInput: BaseInput;
  passwdInput: PasswdInput;
} & ParentConstructorParam;

@injectable()
export default class InputWrapper extends RawInputWrapper {
  emailInput: BaseInput;
  passwdInput: PasswdInput;

  constructor (@unmanaged() payload: ConstructorParam) {
    super({
      ...payload,
      attributes: [
        new Style({ styles: styles.toString() }),
        ...payload.attributes !== undefined ? payload.attributes : [],
      ],
    } as ConstructorParam);
    this.emailInput = payload.emailInput;
    this.passwdInput = payload.passwdInput;
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='email-input-wrapper'>
          ${payload.emailInput}
        </div>
        <div id='passwd-input-wrapper'>
          ${payload.passwdInput}
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('login-process-input-wrapper', InputWrapper);
