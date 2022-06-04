import Operator from '@/src/owl-data-binding/Operator';
import { DataType } from '@/src/data-binding/Model/EdgeContextMenuSelectedId';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import EdgeContextMenuSelectedId from '../../Model/EdgeContextMenuSelectedId';

@injectable()
export default class Getter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.EdgeContextMenuSelectedId) model: EdgeContextMenuSelectedId,
  ) {
    super({
      model,
    });
  }

  get () {
    return this.data.id;
  }
}
