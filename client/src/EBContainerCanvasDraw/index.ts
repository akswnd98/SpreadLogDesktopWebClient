import EBCanvasDraw from '@/src/EBCanvasDraw';

export type ConstructorParam = {
  draws: EBCanvasDraw[];
};

export default class EBContainerCanvasDraw extends EBCanvasDraw {
  draws: EBCanvasDraw[];

  constructor (payload: ConstructorParam) {
    super();
    this.draws = payload.draws;
  }

  draw (context: CanvasRenderingContext2D) {
    this.draws.forEach((draw) => {
      draw.draw(context);
    });
  }
}
