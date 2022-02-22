import EBElement from '@/src/EBElement';
import EBContainerElement, { ConstructorParam as ParentConstructorParam} from '@/src/EBContainerElement';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import EBVerticalLayout from '@/src/EBLayout/EBVerticalLayout';
import EBGraphVis from './GraphVis';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';

export type ConstructorParam = {
} & ParentConstructorParam<EBElement[]>;

@injectable()
export default class EBAdmin extends EBContainerElement<EBElement[]> {
  constructor (
    @unmanaged() ebGraphVis: EBGraphVis,
  ) {
    super({
      attributes: [ new Style({ styles: styles.toString() }) ],
      layout: new EBVerticalLayout(),
      childElements: [ ebGraphVis ],
    });
  }
}

customElements.define('eb-admin', EBAdmin);
