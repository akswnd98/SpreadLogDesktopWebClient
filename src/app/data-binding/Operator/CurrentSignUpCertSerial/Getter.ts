import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import CurrentSignUpCertSerial, { DataType } from '../../Model/CurrentSignUpCertSerial';

@injectable()
export default class Getter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.CurrentSignUpCertSerial) model: CurrentSignUpCertSerial,
  ) {
    super({
      model,
    });
  }

  get () {
    return this.data.serial;
  }
}
