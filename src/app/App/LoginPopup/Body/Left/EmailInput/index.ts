import Element from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { ConstructorParam } from '@/src/owl-element/Element/Raw';
import { html, render } from 'lit-html';
import FocusHandler from './Handler/Focus';
import FocusOutHandler from './Handler/FocusOut';

@injectable()
export default class EmailInput extends Element {
  isDefault: boolean = true;

  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
    this.registerAttribute(new FocusHandler({ emailInput: this }));
    this.registerAttribute(new FocusOutHandler({ emailInput: this }));
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <input id='input-box' value='이메일'></input>
        <div id='hor-line'></div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('login-popup-email-input', EmailInput);
