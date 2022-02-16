import EBInput, { ConstructorParam as ParentConstructorParam } from '@/src/EBInput';
import 'reflect-metadata';
import { inject, injectable, unmanaged } from 'inversify';
import InputHandler from './Handler';
import { SYMBOLS } from '@/src/admin/types';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class Input extends EBInput {
  constructor (
    @inject(SYMBOLS.NewNodeInputHandler) handler: InputHandler,
  ) {
    super({
      attributes: [ handler ],
    });
  }
}

customElements.define('eb-new-dialog-body-input', Input);
