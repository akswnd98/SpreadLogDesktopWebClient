import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { html, render } from 'lit-html';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import GraphIntro from './GraphIntro';
import SpreadIntro from './SpreadIntro';

@injectable()
export default class FrontPage extends Element {
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
        ${new GraphIntro()}
        ${new SpreadIntro()}
      `,
      this.rootElement,
    );
  }
}

customElements.define('front-page', FrontPage);
