import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { render, html } from 'lit-html';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';

@injectable()
export default class LoginLabel extends EBElement {
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
