import Style from '@/src/owl-element/Attribute/Style';
import ContainerElement from '@/src/owl-element/Element/ContainerElement';
import VerticalLayout, { ChildElementsType } from '@/src/owl-element/Element/ContainerElement/Layout/VerticalLayout';
// import Image from './Image';
import styles from './index.scss';

export default class Toolbar extends ContainerElement<ChildElementsType> {
  constructor () {
    super({
      childElements: [
        // new Image({}),
      ],
      layout: new VerticalLayout(),
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
  }
}

customElements.define('editor-popup-body-editor-toolbar', Toolbar);
