import LoginPopupModel, { DataType } from '../../Model/LoginPopup';
import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import LoginState from '../../State/LoginPopup/Login';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import Left from '@/src/app/App/LoginPopup/Body/Left';
import Right from '@/src/app/App/LoginPopup/Body/Right';

@injectable()
export default class ChangeToLoginState extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.LoginPopupModel) model: LoginPopupModel,
  ) {
    super({
      model,
    });
  }

  change () {
    this.data.state = new LoginState();
    this.update();
  }

  protected update () {
    const left = Static.instance.get<Left>(SYMBOLS.LoginPopupBodyLeft);
    left.shadowRoot!.querySelectorAll('#root>div').forEach((v) => {
      v.classList.remove('active', 'inactive');
      v.classList.add('inactive');
    });
    left.shadowRoot!.getElementById('login-wrapper')!.classList.remove('inactive');
    left.shadowRoot!.getElementById('login-wrapper')!.classList.add('active');
    const right = Static.instance.get<Right>(SYMBOLS.LoginPopupBodyRight);
    right.shadowRoot!.getElementById('login-wrapper')!.classList.remove('inactive', 'active');
    right.shadowRoot!.getElementById('login-wrapper')!.classList.add('inactive');
    right.shadowRoot!.getElementById('sign-up-wrapper')!.classList.remove('inactive', 'active');
    right.shadowRoot!.getElementById('sign-up-wrapper')!.classList.add('active');
  }
}
