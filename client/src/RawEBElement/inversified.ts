import { render, html } from 'lit-html';
import Renderer from '@/src/Renderer';
import { injectable, inject } from 'inversify';

export type ConstructorParam = {
  renderer?: Renderer;
};

export default abstract class Inversified extends HTMLElement {
  rootElement: HTMLDivElement;

  constructor (payload: ConstructorParam) {
    super();

    this.initField(payload);

    this.attachShadow({ mode: 'open' });
    render(html`<div id='root' class='root'></div>`, this.shadowRoot!);
    this.rootElement = this.shadowRoot!.getElementById('root')! as HTMLDivElement;
    this.initialRender();
    payload.renderer?.render(this);
  }

  initField (payload: ConstructorParam) {}

  initialRender () {}
}
