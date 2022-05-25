import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import { html, render } from 'lit-html';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import hubSvg from '@/assets/images/hub.svg';

@injectable()
export default class ViewGraph extends Element {
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
        <img src=${hubSvg}></img>
      `,
      this.rootElement,
    );
  }
}

customElements.define('nav-view-graph', ViewGraph);
