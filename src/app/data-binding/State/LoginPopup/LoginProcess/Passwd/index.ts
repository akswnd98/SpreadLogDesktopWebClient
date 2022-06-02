import 'reflect-metadata';
import { injectable } from 'inversify';
import LoginProcessState from '..';
import PasswdToUserConfermedCommand from '@/src/app/data-binding/Command/Undoable/LoginPopup/LoginProcess/PasswdToUserConfermed';
import StateTransition from '@/src/owl-data-binding/Command/Undoable/StateTransition';
import State from '@/src/owl-data-binding/State';

@injectable()
export default class Passwd extends LoginProcessState {
  generateNextCommand () {
    return new PasswdToUserConfermedCommand();
  }

  async doEsc () {
    
  }
}
