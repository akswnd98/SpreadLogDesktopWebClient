import LoginPopup from '.';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import UndoLastCommand from '../../Operator/LoginPopup/SignUpProcessChain/UndoLastCommand';

export default class SignUp extends LoginPopup {
  async back () {
    const undoOperator = Static.instance.get<UndoLastCommand>(SYMBOLS.UndoLastSignUpProcessCommand);
    await undoOperator.undo();
  }

  async doEnter () {

  }

  async doEsc () {
    
  }
}
