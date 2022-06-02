import LoginPopupModel, { DataType } from '../../Model/LoginPopup';
import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class StateGetter extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.LoginPopupModel) model: LoginPopupModel,
  ) {
    super({
      model,
    });
  }

  get () {
    return this.data.state;
  }
}
