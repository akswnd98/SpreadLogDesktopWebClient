import Style from '@/src/EBAttribute/Style';
import EBContainerElement from '@/src/EBContainerElement';
import EBVerticalLayout, { ChildElementsType } from '@/src/EBLayout/EBVerticalLayout';
import Image from './Image';
import styles from './index.scss';

export default class Toolbar extends EBContainerElement<ChildElementsType> {
  constructor () {
    super({
      childElements: [
        new Image({}),
      ],
      layout: new EBVerticalLayout(),
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
  }
}

customElements.define('eb-editor-popup-body-editor-toolbar', Toolbar);
