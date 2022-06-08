import SignUpProcess from '..';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import PasswdCheckToNickName from '@/src/app/data-binding/Command/Undoable/LoginPopup/SignUpProcess/ErrorHandleDecorator/PasswdCheckToNickname';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class PasswdCheck extends SignUpProcess {
  generateNextCommand () {
    return Static.instance.get<PasswdCheckToNickName>(SYMBOLS.SignUpProcessPasswdCheckToNickNameErrorHandledCommand);
  }

  async doEsc () {

  }
}
