import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import LoginPopup from '.';
import UndoLastCommand from '../../Operator/LoginPopup/LoginProcessChain/UndoLastCommand';

export default class Login extends LoginPopup {
  async back () {
    const undoOperator = Static.instance.get<UndoLastCommand>(SYMBOLS.UndoLastLoginProcessCommand);
    await undoOperator.undo();
  }

  async doEnter () {

  }

  async doEsc () {
    
  }
}
