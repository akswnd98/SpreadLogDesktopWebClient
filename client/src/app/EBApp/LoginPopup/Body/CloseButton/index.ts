import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import xButton from '@/assets/images/x-24.svg';
import ClickHandler from './Handler';

@injectable()
export default class CloseButton extends EBElement {
  constructor () {
    super({
      attributes: [
        new ClickHandler({ id: 'close' }),
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
