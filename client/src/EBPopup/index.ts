import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import { html, render } from 'lit-html';

export type ConstructorParam = {
  body: EBElement;
} & ParentConstructorParam;

export default class EBPopup extends EBElement {
  body!: EBElement;

  constructor (payload: ConstructorParam) {
    super(payload);
    this.registerAttributes([ new Style({ styles: styles.toString() })]);
    this.rootElement.classList.add('hide');
  }

  initField (payload: ConstructorParam) {
    this.body = payload.body;
  }

  initialRender () {
    render(
      html`
        ${this.body}
      `,
      this.rootElement,
    );
  }

  show () {
    this.rootElement.classList.remove('hide');
    this.rootElement.classList.add('show');
  }

  hide () {
    this.rootElement.classList.remove('show');
    this.rootElement.classList.add('hide');
  }
}

customElements.define('eb-popup', EBPopup);
