import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import { html, render } from 'lit-html';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import accountSvg from '@/assets/images/account-circle.svg';
import ClickHandler from './Handler/Click';

@injectable()
export default class Account extends Element {
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
        <img src=${accountSvg}></img>
      `,
      this.rootElement,
    );
  }
}

customElements.define('nav-account', Account);
