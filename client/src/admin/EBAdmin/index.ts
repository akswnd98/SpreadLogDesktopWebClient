import EBElement from '@/src/EBElement';
import EBContainerElement, { ConstructorParam as ParentConstructorParam} from '@/src/EBContainerElement';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import EBVerticalLayout from '@/src/EBLayout/EBVerticalLayout';
import EBGraphVis from './EBGraphVis';

export type ConstructorParam = {
} & ParentConstructorParam<EBElement[]>;

export default class EBAdmin extends EBContainerElement<EBElement[]> {
  constructor () {
    super({
      attributes: [ new Style({ styles: styles.toString() }) ],
      layout: new EBVerticalLayout(),
      childElements: [ new EBGraphVis({}) ],
    });
  }
}

customElements.define('eb-admin', EBAdmin);
