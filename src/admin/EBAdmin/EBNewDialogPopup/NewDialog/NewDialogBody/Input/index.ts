import EBInput, { ConstructorParam as ParentConstructorParam } from '@/src/EBInput';
import 'reflect-metadata';
import { inject, injectable, unmanaged } from 'inversify';
import InputHandler from './Handler';
import { SYMBOLS } from '@/src/admin/types';
import Style from '@/src/elements/EBAttribute/Style';
import styles from './index.scss';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Input extends EBInput {
  constructor (
    @inject(SYMBOLS.NewNodeInputHandler) handler: InputHandler,
  ) {
    super({
      attributes: [
        handler,
        new Style({ styles: styles.toString() }),
      ],
    });
  }
}

customElements.define('eb-new-dialog-body-input', Input);
