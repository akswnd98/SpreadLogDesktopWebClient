import LoginPopupModel, { DataType } from '../../Model/LoginPopup';
import Operator from '@/src/owl-data-binding/Operator';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import Left from '@/src/app/App/LoginPopup/Body/Left';
import Right from '@/src/app/App/LoginPopup/Body/Right'
import SignUpState from '../../State/LoginPopup/SignUp';

@injectable()
export default class ChangeToSignUpState extends Operator<DataType> {
  constructor (
    @inject(SYMBOLS.LoginPopupModel) model: LoginPopupModel,
  ) {
    super({
      model,
    });
  }

  change () {
    this.data.state = new SignUpState();
    this.update();
  }

  protected update () {
    const left = Static.instance.get<Left>(SYMBOLS.LoginPopupBodyLeft);
    left.shadowRoot!.querySelectorAll('#root>div').forEach((v) => {
      v.classList.remove('active', 'inactive');
      v.classList.add('inactive');
    });
    left.shadowRoot!.getElementById('sign-up-wrapper')!.classList.remove('inactive');
    left.shadowRoot!.getElementById('sign-up-wrapper')!.classList.add('active');
    const right = Static.instance.get<Right>(SYMBOLS.LoginPopupBodyRight);
    right.shadowRoot!.getElementById('login-wrapper')!.classList.remove('inactive', 'active');
    right.shadowRoot!.getElementById('login-wrapper')!.classList.add('active');
    right.shadowRoot!.getElementById('sign-up-wrapper')!.classList.remove('inactive', 'active');
    right.shadowRoot!.getElementById('sign-up-wrapper')!.classList.add('inactive');
  }
}
