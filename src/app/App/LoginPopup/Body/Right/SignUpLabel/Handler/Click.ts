import Handler from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import ChangeToSignUpState from '@/src/app/data-binding/Operator/LoginPopup/ChangeToSignUpState';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  async handle () {
    const operator = Static.instance.get<ChangeToSignUpState>(SYMBOLS.ChangeLoginPopupStateToSignUp);
    operator.change();
  }
}
