import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import { ConstructorParam } from '@/src/owl-element/Element/Raw';
import { html, render } from 'lit-html';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import LoginButton from './LoginButton';
import OAuthLoginButton from './OAuthLoginButton';
import googleSvg from '@/assets/images/google.svg';
import googleStyles from './OAuthLoginButton/google.scss';
import InputWrapper from './InputWrapper/inversified';
import { SYMBOLS } from '@/src/app/symbols';
// import EnterHandler from './Handler/Enter';
import EnterHandler from './WindowHandler/Enter';

export type PayloadParam = {
  inputWrapper: InputWrapper;
} & ParentConstructorParam;

@injectable()
export default class LoginProcess extends Element {
  inputWrapper: InputWrapper;

  constructor (
    @inject(SYMBOLS.LoginProcessInputWrapper) inputWrapper: InputWrapper,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
        new EnterHandler(),
      ],
      inputWrapper,
    } as PayloadParam);
    this.inputWrapper = inputWrapper;
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='guide-div'>
          <div id='login-label'>로그인</div>
          <div class='input-wrapper'>
            ${payload.inputWrapper}
          </div>
          <div id='login-button-wrapper'>
            ${new LoginButton({ left: this })}
          </div>
          <div id='login-error'>
            이메일, 비밀번호를 다시 확인해 주세요.
          </div>
          <div id='sns-login-label'>SNS 간편 시작</div>
          <div id='google-button-wrapper'>
            ${new OAuthLoginButton({ attributes: [new Style({ styles: googleStyles.toString() })], text: 'SIGN IN WITH GOOGLE', svgUrl: googleSvg })}
          </div>
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('login-popup-login-process', LoginProcess);
