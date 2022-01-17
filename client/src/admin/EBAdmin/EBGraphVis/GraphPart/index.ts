export type ConstructorParam = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export default abstract class GraphPart {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor (payload: ConstructorParam) {
    this.x = payload.x;
    this.y = payload.y;
    this.width = payload.width;
    this.height = payload.height;
  }

  abstract draw (context: CanvasRenderingContext2D): void;
}
