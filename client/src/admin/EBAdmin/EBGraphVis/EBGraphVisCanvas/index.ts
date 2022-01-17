import { html, render } from 'lit-html';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { injectable, unmanaged } from 'inversify';
import 'reflect-metadata';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class EBGraphVisCanvas extends EBElement {
  constructor (payload: ConstructorParam) {
    super(payload);
  }
  
  initialRender () {
    render(
      html`
        <canvas id='canvas' class='canvas'></canvas>
      `,
      this.rootElement,
    );
  }
}
