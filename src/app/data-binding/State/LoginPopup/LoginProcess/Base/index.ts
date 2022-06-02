import 'reflect-metadata';
import { injectable } from 'inversify';
import LoginProcessState from '..';
import BaseToPasswd from '../../../../Command/Undoable/LoginPopup/LoginProcess/BaseToPasswd';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';


@injectable()
export default class Base extends LoginProcessState {
  generateNextCommand () {
    return Static.instance.get<BaseToPasswd>(SYMBOLS.LoginProcessBaseToPasswdCommand);
  }
  
  async doEsc () {

  }
}
