import { html, render } from 'lit-html';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';

export type ConstructorParam = {
} & ParentConstructorParam;

export default class EBAdmin extends EBElement {
  constructor (payload: ConstructorParam) {
    super(payload);
  }

  initialRender () {
    render(
      html`
        <div id='root' class='root'>
          hello world nice
        </div>
      `,
      this.shadowRoot!,
    );
  }
}
