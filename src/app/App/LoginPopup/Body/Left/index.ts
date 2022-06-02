import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { html, render } from 'lit-html';
import LoginProcess from './Process/LoginProcess';
import SignUpProcess from './Process/SignUpProcess';
import { SYMBOLS } from '@/src/app/symbols';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';

export type PayloadParam = {
  loginElement: LoginProcess;
  signUpElement: SignUpProcess;
} & ParentConstructorParam;

@injectable()
export default class Left extends Element {
  loginElement: LoginProcess;
  signUpElement: SignUpProcess;

  constructor (
    @inject(SYMBOLS.LoginProcessElement) loginElement: LoginProcess,
    @inject(SYMBOLS.SignUpProcessElement) signUpElement: SignUpProcess,
  ) {
    super({
      loginElement,
      signUpElement,
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    } as PayloadParam);
    this.loginElement = loginElement;
    this.signUpElement = signUpElement;
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='login-wrapper' class='active'>
          ${payload.loginElement}
        </div>
        <div id='sign-up-wrapper' class='inactive'>
          ${payload.signUpElement}
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('login-popup-left', Left);
