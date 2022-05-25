import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import ClickHandler from './Handler/Click';

@injectable()
export default class LoginButton extends Element {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
        new ClickHandler(),
      ],
    });
  }

  initialRender (payload: ParentConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        로그인
      `,
      this.rootElement,
    );
  }
}

customElements.define('login-popup-login-button', LoginButton);
