import Element from '@/src/owl-element/Element';
import { ConstructorParam } from '@/src/owl-element/Element/Raw';
import { html, render } from 'lit-html';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import LoginLabel from './LoginLabel';
import SignUpLabel from './SignUpLabel';

@injectable()
export default class Right extends Element {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='upper-wrapper'>
          <div>Let's Spread</div>
        </div>
        <div id='lower-wrapper'>
          <div id='guide-div'>
            <div id='sign-up-wrapper' class='label-wrapper active'>
              ${new SignUpLabel()}
            </div>
            <div id='login-wrapper' class='label-wrapper inactive'>
              ${new LoginLabel()}
            </div>
          </div>
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('login-popup-right', Right);
