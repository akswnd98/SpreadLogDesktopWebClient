import GraphPart, { ConstructorParam as ParentConstructorParam } from '../GraphPart';

export type ConstructorParam = {
  x: number;
  y: number;
  radius: number;
} & ParentConstructorParam;

export default class Node extends GraphPart {
  x: number;
  y: number;
  radius: number;

  constructor ({ x, y, radius }: ConstructorParam) {
    super({ left: x - radius, top: y - radius, width: 2 * radius, height: 2 * radius });
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw (context: CanvasRenderingContext2D) {
    context.arc();
  }
}
