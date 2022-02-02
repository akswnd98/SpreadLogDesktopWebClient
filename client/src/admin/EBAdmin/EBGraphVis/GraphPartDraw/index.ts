import EBCanvasDraw from '@/src/EBCanvasDraw';

export type ConstructorParam = {
  left: number;
  top: number;
  width: number;
  height: number;
  graphPartImageSource: CanvasImageSource;
};

export default class GraphPartDraw extends EBCanvasDraw {
  left: number;
  top: number;
  width: number;
  height: number;
  graphPartImageSource: CanvasImageSource;

  constructor (payload: ConstructorParam) {
    super();
    this.left = payload.left;
    this.top = payload.top;
    this.width = payload.width;
    this.height = payload.height;
    this.graphPartImageSource = payload.graphPartImageSource;
  }

  draw (context: CanvasRenderingContext2D) {
    context.drawImage(this.graphPartImageSource, this.left, this.top);
  }
}
