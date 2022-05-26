import 'reflect-metadata';
import { injectable } from 'inversify';
import LoginPopupCommand from '../../Command/Undoable/LoginPopup';
import LoginPopupState from '../../State/LoginPopup';
import BaseState from '../../State/LoginPopup/Base';

@injectable()
export default class LoginPopup {
  protected syncPromise: Promise<void>;
  protected stack: [LoginPopupState, LoginPopupCommand][];
  protected state: LoginPopupState;

  constructor () {
    this.syncPromise = Promise.resolve();
    this.stack = [];
    this.state = new BaseState();
  }

  async receiveCommand (command: LoginPopupCommand) {
    try {
      await this.syncPromise.then(async () => {
        await this.state.executeCommand(command);
        this.state = command.nextState;
        this.stack.push([this.state, command]);
      });
    } catch (e) {
      console.log(e);
      throw Error('LoginPopupStacker.receiveCommand failed');
    }
  }

  async undo () {
    try {
      if (this.stack.length <= 0) throw Error('no more back');
      await this.syncPromise.then(async () => {
        await this.stack[this.stack.length - 1][1].unexecute()
        this.state = this.stack[this.stack.length - 1][0];
        this.stack.pop();
      });
    } catch (e) {
      console.log(e);
      throw Error('LoginPopupStacker.undo failed');
    }
  }
}
