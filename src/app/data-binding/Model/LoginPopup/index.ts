import Model from '@/src/owl-data-binding/Model';
import 'reflect-metadata';
import { injectable } from 'inversify';
import LoginPopupState from '../../State/LoginPopup';
import LoginState from '../../State/LoginPopup/Login';

export type DataType = {
  state: LoginPopupState;
};

@injectable()
export default class LoginPopup extends Model<DataType> {
  constructor () {
    super({
      data: {
        state: new LoginState(),
      },
    });
  }
}
