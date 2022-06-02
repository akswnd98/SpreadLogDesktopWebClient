import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import CurrentSignUpCertSerial, { DataType } from '../../Model/CurrentSignUpCertSerial';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class Setter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.CurrentSignUpCertSerial) model: CurrentSignUpCertSerial,
  ) {
    super({
      model,
    });
  }

  set (serial: string) {
    this.data.serial = serial;
  }
}
