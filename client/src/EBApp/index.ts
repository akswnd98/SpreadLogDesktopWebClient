import { html, render } from 'lit-html';
import EBElement, { ConstructorParam as ParentConstructorParam } from '../EBElement';

export type ConstructorParam = {
} & ParentConstructorParam;

export default class EBApp extends EBElement {
  constructor (payload: ConstructorParam) {
    super(payload);
  }

  initialRender () {
    render(
      html`
        <div id='root' class='root'>
          hello world
        </div>
      `,
      this.shadowRoot!,
    );
  }
}
