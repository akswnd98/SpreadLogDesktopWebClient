import { render, html } from 'lit-html';
import Renderer from '@/src/Renderer';
import 'reflect-metadata';
import { decorate, injectable, unmanaged } from 'inversify';

export type ConstructorParam = {
  renderer?: Renderer;
};

decorate(injectable(), HTMLElement);
decorate(injectable(), Element);
decorate(injectable(), Node);
decorate(injectable(), EventTarget);

@injectable()
export default abstract class RawEBElement extends HTMLElement {
  rootElement: HTMLDivElement;

  constructor (@unmanaged() payload: ConstructorParam) {
    super();

    this.attachShadow({ mode: 'open' });
    render(html`<div id='root' class='root'></div>`, this.shadowRoot!);
    this.rootElement = this.shadowRoot!.getElementById('root')! as HTMLDivElement;
    this.initialRender(payload);
    payload.renderer?.render(this);
  }

  initialRender (payload: ConstructorParam) {}
}
