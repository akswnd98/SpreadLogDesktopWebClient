import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import backButton from '@/assets/images/login-popup-back.svg';
import ClickHandler from './Handler/Click';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';

@injectable()
export default class BackButton extends Element {
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
        <img src=${backButton} id='close'></img>
      `,
      this.rootElement,
    );
  }
}

customElements.define('login-popup-body-back-button', BackButton);
