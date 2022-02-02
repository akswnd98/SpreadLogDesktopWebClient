import EBCanvasDraw from '.';

export default function generateCanvas (draw: EBCanvasDraw) {
  const ret = document.createElement('canvas');
  draw.draw(ret.getContext('2d')!);
  return ret;
}
