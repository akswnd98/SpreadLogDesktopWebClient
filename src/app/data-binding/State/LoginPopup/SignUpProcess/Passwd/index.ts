import 'reflect-metadata';
import { injectable } from 'inversify';
import SignUpProcessState from '..';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import PasswdToPasswdCheck from '@/src/app/data-binding/Command/Undoable/LoginPopup/SignUpProcess/ErrorHandleDecorator/PasswdToPasswdCheck';

@injectable()
export default class Base extends SignUpProcessState {
  constructor () {
    super();
  }

  generateNextCommand () {
    return Static.instance.get<PasswdToPasswdCheck>(SYMBOLS.SignUpProcessPasswdToPasswdCheckErrorHandledCommand);
  }
  
  async doEsc () {

  }
}
