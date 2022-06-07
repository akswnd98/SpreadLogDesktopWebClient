import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import NodeContextMenuSelectedId, { DataType } from '../../Model/NodeContextMenuSelectedId';

@injectable()
export default class Getter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.NodeContextMenuSelectedId) model: NodeContextMenuSelectedId,
  ) {
    super({
      model,
    });
  }

  get () {
    return this.data.id;
  }
}
