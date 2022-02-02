import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import EBGraphVisCanvasWrapper from './EBGraphVisCanvasWrapper';
import ContextMenuHandler from './Handler/ContextMenu';
import CircleDraw from '@/src/EBCanvasDraw/Circle';
import ResizeHandler from './Handler/Resize';

export type ConstructorParam = {
};

export default class EBGraphVis extends EBGraphVisCanvasWrapper {
  constructor (payload: ConstructorParam) {
    super({
      draws: [new CircleDraw({ radius: 30 })],
      attributes: [
        new Style({ styles: styles.toString()}),
        new ContextMenuHandler(),
        new ResizeHandler(),
      ],
    });
  }
}

customElements.define('eb-graph-vis', EBGraphVis);
