import EBCanvasDraw from '..';

export type ConstructorParam = {
  radius: number;
  fill?: string;
  stroke?: string;
  lineWidth?: number;
};

export default class Circle extends EBCanvasDraw {
  radius: number;
  fill: string = 'black';
  stroke: string = 'black';
  lineWidth: number = 0;

  constructor (payload: ConstructorParam) {
    super();
    this.radius = payload.radius;
    if (payload.fill !== undefined) this.fill = payload.fill;
    if (payload.stroke !== undefined) this.stroke = payload.stroke;
    if (payload.lineWidth !== undefined) this.lineWidth = payload.lineWidth;
  }

  draw (context: CanvasRenderingContext2D) {
    context.fillStyle = this.fill;
    context.strokeStyle = this.stroke;
    context.lineWidth = this.lineWidth;
    context.beginPath();
    context.arc(this.radius, this.radius, this.radius, 0, 360);
    context.stroke();
    context.fill();
    context.closePath();
  }
}
