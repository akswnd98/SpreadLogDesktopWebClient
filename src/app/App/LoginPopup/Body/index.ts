import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { html, render } from 'lit-html';
import Left from './Left';
import Right from './Right';
import CloseButton from './CloseButton';
import BackButton from './BackButton';
import { SYMBOLS } from '@/src/app/symbols';

export type PayloadParam = {
  left: Left;
  right: Right;
} & ParentConstructorParam;

@injectable()
export default class Body extends Element {
  constructor (
    @inject(SYMBOLS.LoginPopupBodyLeft) left: Left,
    @inject(SYMBOLS.LoginPopupBodyRight) right: Right,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      left,
      right,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='popup-control-wrapper'>
          <div id='close-wrapper'>
            ${new CloseButton()}
          </div>
          <div id='back-wrapper'>
            ${new BackButton()}
          </div>
        </div>
        <div id='main'>
          <div id='left-wrapper'>
            ${payload.left}
          </div>
          <div id='right-wrapper'>
            ${payload.right}
          </div>
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('login-popup-body', Body);
