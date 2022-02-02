import EBCanvasDraw from '@/src/EBCanvasDraw';
import EBCanvasWrapper, { ConstructorParam as ParentConstructorParam } from '@/src/EBCanvasWrapper';

export type ConstructorParam = {
} & ParentConstructorParam;

export default class EBGraphVisCanvasWrapper extends EBCanvasWrapper {
  appendDraw (draw: EBCanvasDraw) {
    this.draws.push(draw);
    this.draw();
  }
}

customElements.define('eb-graph-vis-canvas-wrapper', EBGraphVisCanvasWrapper);
