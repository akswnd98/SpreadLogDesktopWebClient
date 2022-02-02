import { render, html } from 'lit-html';
import Renderer from '@/src/Renderer';

export type ConstructorParam = {
  renderer?: Renderer;
};

export default abstract class RawEBElement extends HTMLElement {
  rootElement: HTMLDivElement;

  constructor (payload: ConstructorParam) {
    super();

    this.attachShadow({ mode: 'open' });
    render(html`<div id='root' class='root'></div>`, this.shadowRoot!);
    this.rootElement = this.shadowRoot!.getElementById('root')! as HTMLDivElement;
    this.initialRender(payload);
    payload.renderer?.render(this);
  }

  initialRender (payload: ConstructorParam) {}
}
