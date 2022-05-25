import { html, render } from 'lit-html';
import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Navigator from './Navigator';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { SYMBOLS } from '../symbols';
import Body from './Body';
import Footer from './Footer';

export type PayloadParam = {
  body: Body;
} & ParentConstructorParam;

@injectable()
export default class App extends Element {
  constructor (
    @inject(SYMBOLS.AppBody) body: Body,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      body,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        ${new Navigator()}
        <div id='long'>
          ${payload.body}
          ${new Footer()}
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('sl-app', App);
