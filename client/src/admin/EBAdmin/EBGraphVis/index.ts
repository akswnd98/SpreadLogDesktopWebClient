import { injectable, unmanaged } from 'inversify';
import 'reflect-metadata';
import EBGraphVisCanvas, { ConstructorParam as ParentConstructorParam } from './EBGraphVisCanvas';
import GraphPart from './GraphPart';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class EBGraphVis extends EBGraphVisCanvas {
  constructor (payload: ConstructorParam) {
    super(payload);
  }

  addPart (part: GraphPart) {
    const canvasElement = this.shadowRoot!.getElementById('canvas')! as HTMLCanvasElement;
    part.draw(canvasElement.getContext('2d')!);
  }
}

customElements.define('eb-graph-vis-tmp', EBGraphVis);
