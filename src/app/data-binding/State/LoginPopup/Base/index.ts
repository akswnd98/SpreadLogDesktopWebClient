import 'reflect-metadata';
import { injectable } from 'inversify';
import LoginPopup from '..';
import LoginPopupCommand from '../../../Command/Undoable/LoginPopup';
import BaseToPasswdCommand from '../../../Command/Undoable/LoginPopup/BaseToPasswd';

@injectable()
export default class Base extends LoginPopup {
  async executeCommand (command: LoginPopupCommand) {
    try {
      await super.executeCommand(command);
    } catch (e) {
      console.log(e);
      console.log(`command: ${command} from BaseState`);
      throw Error('LoginPopupBaseState.executeCommand failed');
    }
  }

  protected checkCommandValid (command: LoginPopupCommand) {
    return command instanceof BaseToPasswdCommand;
  }
}
