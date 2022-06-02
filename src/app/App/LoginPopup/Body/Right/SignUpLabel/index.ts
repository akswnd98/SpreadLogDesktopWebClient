import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { html, render } from 'lit-html';
import ClickHandler from './Handler/Click';

@injectable()
export default class SignUpLabel extends Element {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
        new ClickHandler({ id: 'root' }),
      ],
    });
  }

  initialRender (payload: ParentConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        회원가입
      `,
      this.rootElement,
    );
  }
}

customElements.define('login-popup-right-sign-up-label', SignUpLabel);
