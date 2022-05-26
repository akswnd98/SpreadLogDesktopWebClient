import 'reflect-metadata';
import { injectable } from 'inversify';
import LoginPopup from '..';
import LoginPopupCommand from '../../../Command/Undoable/LoginPopup';

@injectable()
export default class Passwd extends LoginPopup {
  async executeCommand (command: LoginPopupCommand) {
    try {
      await command.execute();
    } catch (e) {
      throw Error('')
    }
  }

  protected checkCommandValid (command: LoginPopupCommand) {
    return false;
  }
}
