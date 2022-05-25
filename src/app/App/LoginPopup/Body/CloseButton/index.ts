import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import xButton from '@/assets/images/login-popup-x.svg';
import ClickHandler from './Handler';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';

@injectable()
export default class CloseButton extends Element {
  constructor () {
    super({
      attributes: [
        new ClickHandler({ id: 'close' }),
        new Style({ styles: styles.toString() }),
      ],
    });
  }

  initialRender (payload: ParentConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <img src=${xButton} id='close'></img>
      `,
      this.rootElement,
    );
  }
}

customElements.define('login-popup-body-close-button', CloseButton);
