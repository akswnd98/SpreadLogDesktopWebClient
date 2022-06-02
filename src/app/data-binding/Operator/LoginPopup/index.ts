import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable, unmanaged } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import LoginPopupModel, { DataType } from '../../Model/LoginPopup';

@injectable()
export default class LoginPopup extends Operator<DataType> {
  constructor (
    @unmanaged() model: LoginPopupModel,
  ) {
    super({
      model,
    });
  }
}
