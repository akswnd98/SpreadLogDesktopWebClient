import 'reflect-metadata';
import { injectable } from 'inversify';
import Selection from '..';
import { ConstructorParam } from '@/src/owl-element/Element';
import { html, render } from 'lit-html';
import Click from './Handler/Click';

@injectable()
export default class Logout extends Selection {
  constructor () {
    super({
      attributes: [
        new Click(),
      ],
    });
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        로그아웃
      `,
      this.rootElement,
    );
  }
}

customElements.define('click-popup-body-logout-selection', Logout);
