import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { render, html } from 'lit-html';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';

@injectable()
export default class LoginLabel extends Element {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
  }

  initialRender (payload: ParentConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        Login
      `,
      this.rootElement,
    );
  }
}

customElements.define('login-popup-body-login-label', LoginLabel);
