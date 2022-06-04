import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import CurrentNewNodeTitle, { DataType } from '../../Model/CurrentNewNodeTitle';

@injectable()
export default class Getter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.CurrentNewNodeTitle) model: CurrentNewNodeTitle,
  ) {
    super({
      model,
    });
  }

  get () {
    return this.data.title;
  }
}
