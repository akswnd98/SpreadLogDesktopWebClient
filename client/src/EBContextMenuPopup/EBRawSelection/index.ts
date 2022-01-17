import { html, render } from 'lit-html';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';

export type ConstructorParam = {
  text: string;
} & ParentConstructorParam;

export default class EBRawSelection extends EBElement {
  text!: string;

  constructor (payload: ConstructorParam) {
    super(payload);
  }

  initField (payload: ConstructorParam) {
    this.text = payload.text;
  }

  initialRender () {
    render(
      html`
        <p>${this.text}</p>
      `,
      this.rootElement,
    );
  }
}
