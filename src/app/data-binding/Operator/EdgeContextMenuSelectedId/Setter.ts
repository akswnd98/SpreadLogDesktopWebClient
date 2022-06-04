import Operator from '@/src/owl-data-binding/Operator';
import { DataType } from '@/src/data-binding/Model/EdgeContextMenuSelectedId';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import EdgeContextMenuSelectedId from '../../Model/EdgeContextMenuSelectedId';

@injectable()
export default class Setter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.EdgeContextMenuSelectedId) model: EdgeContextMenuSelectedId,
  ) {
    super({
      model,
    });
  }

  set (id: number) {
    this.data.id = id;
  }
}
