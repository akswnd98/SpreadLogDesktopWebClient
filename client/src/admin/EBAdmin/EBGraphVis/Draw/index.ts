import EBContainerCanvasDraw, { ConstructorParam as ParentConstructorParam } from '@/src/EBContainerCanvasDraw';
import CircleDraw from '@/src/EBCanvasDraw/Circle';

export type Circle = {
  x: number;
  y: number;
  radius: number;
};

export type ConstructorParam = {
  circles: Circle[];
};

export default class Draw extends EBContainerCanvasDraw {
  constructor (payload: ConstructorParam) {
    super({ draws: Draw.constructCircleDraws(payload.circles) });
  }

  static constructCircleDraws (circles: Circle[]) {
    return circles.map((circle) => new CircleDraw(circle));
  }

  draw (context: CanvasRenderingContext2D) {
    super.draw(context);
  }
}
