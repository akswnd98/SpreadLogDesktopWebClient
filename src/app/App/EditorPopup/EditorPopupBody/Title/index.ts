import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import { render, html } from 'lit-html';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import { injectable } from 'inversify';

@injectable()
export default class Title extends Element {
  constructor () {
    super({
      attributes: [ new Style({ styles: styles.toString() }) ],
    });
  }

  initialRender (payload: ParentConstructorParam) {
    render(
      html`
        <input type='text' id='input'></input>
      `,
      this.rootElement,
    );
  }
}

customElements.define('editor-popup-body-title', Title);
