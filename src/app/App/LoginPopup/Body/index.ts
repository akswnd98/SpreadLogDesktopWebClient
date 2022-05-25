import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { html, render } from 'lit-html';
import Left from './Left';
import Right from './Right';
import CloseButton from './CloseButton';
import BackButton from './BackButton';

@injectable()
export default class Body extends Element {
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
            ${new Left()}
          </div>
          <div id='right-wrapper'>
            ${new Right()}
          </div>
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('login-popup-body', Body);
