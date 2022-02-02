import EBElement from '@/src/EBElement';
import EBContainerElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBContainerElement';
import Model from './NameInputSync/Model';
import NameInputSyncStatic from './NameInputSync/static';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import EBVerticalLayout from '@/src/EBLayout/EBVerticalLayout';

export type ConstructorParam = {
  model: Model;
};

export default class EBNewDialogBody extends EBContainerElement<EBElement[]> {
  constructor (payload: ConstructorParam) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      childElements: [
        NameInputSyncStatic.generate(payload),
      ],
      layout: new EBVerticalLayout(),
    });
  }
}

customElements.define('eb-new-dialog-body', EBNewDialogBody);
