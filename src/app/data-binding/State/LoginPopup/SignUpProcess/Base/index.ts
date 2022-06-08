import 'reflect-metadata';
import { injectable } from 'inversify';
import SignUpProcessState from '..';
import BaseToPasswd from '../../../../Command/Undoable/LoginPopup/SignUpProcess/BasicErrorHandleDecorator/BaseToPasswd';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class Base extends SignUpProcessState {
  constructor () {
    super();
  }

  generateNextCommand () {
    return Static.instance.get<BaseToPasswd>(SYMBOLS.SignUpProcessBaseToPasswdErrorHandledCommand);
  }
  
  async doEsc () {

  }
}
