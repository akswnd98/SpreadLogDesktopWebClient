import UndoableCommand from '@/src/owl-data-binding/Command/Undoable';
import LoginPopupState from '../../../State/LoginPopup';

export default abstract class LoginPopup extends UndoableCommand {
  abstract get nextState (): LoginPopupState;
}
