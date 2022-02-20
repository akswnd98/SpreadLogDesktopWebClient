import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { render, html } from 'lit-html';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import { injectable } from 'inversify';

@injectable()
export default class Top extends EBElement {
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

customElements.define('editor-popup-body-top', Top);
