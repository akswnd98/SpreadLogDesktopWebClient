import EBElement from '@/src/EBElement';
import EBContainerElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBContainerElement';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import EBVerticalLayout from '@/src/EBLayout/EBVerticalLayout';
import EBInput from '@/src/EBInput';
import 'reflect-metadata';
import { inject, injectable, unmanaged } from 'inversify';
import { SYMBOLS } from '@/src/admin/types';
import Input from './Input';

export type ConstructorParam = {
};

@injectable()
export default class EBNewDialogBody extends EBContainerElement<EBElement[]> {
  constructor (
    @inject(SYMBOLS.NewNodeInput) input: Input,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
      childElements: [
        input,
      ],
      layout: new EBVerticalLayout(),
    });
  }
}

customElements.define('eb-new-dialog-body', EBNewDialogBody);
