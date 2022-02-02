import ResizeHandler from '@/src/EBAttribute/ResizeHandler';
import EBGraphVis from '..';

export default class Resize extends ResizeHandler {
  graphVis?: EBGraphVis;

  register (element: EBGraphVis) {
    super.register(element);
    this.graphVis = element;
  }

  handle (event: UIEvent) {
    this.graphVis?.handleResize();
  }
}
