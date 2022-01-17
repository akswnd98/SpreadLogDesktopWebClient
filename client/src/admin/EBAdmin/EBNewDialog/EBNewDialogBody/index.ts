import EBElement from '@/src/EBElement';
import EBContainerElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBContainerElement';

export type ConstructorParam = {
} & ParentConstructorParam<EBElement[]>;

export default class EBNewDialogBody extends EBContainerElement<EBElement[]> {
  constructor (payload: ConstructorParam) {
    super(payload);
  }
}

customElements.define('eb-new-dialog-body', EBNewDialogBody);
