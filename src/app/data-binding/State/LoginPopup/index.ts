import 'reflect-metadata';
import { injectable } from 'inversify';
import LoginPopupCommand from '../../Command/Undoable/LoginPopup';

@injectable()
export default abstract class LoginPopup {
  async executeCommand (command: LoginPopupCommand) {
    if (this.checkCommandValid(command)) {
      await command.execute();
    } else {
      throw Error('command is not valid');
    }
  }

  protected abstract checkCommandValid(command: LoginPopupCommand): boolean;
}
