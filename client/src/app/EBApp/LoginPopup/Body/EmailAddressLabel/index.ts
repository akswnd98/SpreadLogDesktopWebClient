import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { render, html } from 'lit-html';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';

@injectable()
export default class EmailAddressLabel extends EBElement {
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
        email address
      `,
      this.rootElement,
    );
  }
}

customElements.define('login-popup-body-email-address-label', EmailAddressLabel);
