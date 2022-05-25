import Element from '@/src/owl-element/Element';
import { ConstructorParam } from '@/src/owl-element/Element/Raw';
import { html, render } from 'lit-html';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import LoginButton from './LoginButton';
import EmailInput from './EmailInput';
import OAuthLoginButton from '../OAuthLoginButton';
import googleSvg from '@/assets/images/google.svg';
import googleStyles from '../OAuthLoginButton/google.scss';

@injectable()
export default class Left extends Element {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='guide-div'>
          <div id='login-label'>로그인</div>
          <div id='email-input-wrapper'>
            ${new EmailInput()}
          </div>
          <div id='login-button-wrapper'>
            ${new LoginButton()}
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

customElements.define('login-popup-left', Left);
