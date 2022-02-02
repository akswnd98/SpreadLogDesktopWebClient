import { html, render } from 'lit-html';
import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import EBCanvasDraw from '../EBCanvasDraw';

export type ConstructorParam = {
  draws: EBCanvasDraw[];
} & ParentConstructorParam;

export default class EBCanvasWrapper extends EBElement {
  canvas: HTMLCanvasElement;
  draws: EBCanvasDraw[];

  constructor (payload: ConstructorParam) {
    super(payload);
    this.canvas = this.shadowRoot!.getElementById('canvas')! as HTMLCanvasElement;
    this.draws = payload.draws;
  }
  
  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <canvas id='canvas' class='canvas'></canvas>
      `,
      this.rootElement,
    );
  }

  connectedCallback () {
    this.handleResize();
  }

  handleResize () {
    this.canvas.width = this.rootElement.clientWidth;
    this.canvas.height = this.rootElement.clientHeight;
    this.draw();
  }

  draw () {
    this.draws.forEach((draw) => {
      draw.draw(this.canvas.getContext('2d')!);
    });
  }
}

customElements.define('eb-canvas-wrapper', EBCanvasWrapper);
