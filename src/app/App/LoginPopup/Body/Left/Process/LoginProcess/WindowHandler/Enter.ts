import WindowHandler from '@/src/owl-element/Attribute/WindowHandler';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import LoginProcess from '..';
import StateGetter from '@/src/app/data-binding/Operator/LoginPopup/StateGetter';
import LoginPopup from '@/src/app/App/LoginPopup';
import LoginState from '@/src/app/data-binding/State/LoginPopup/Login';
import SignUpState from '@/src/app/data-binding/State/LoginPopup/SignUp';
import GetCurState from '@/src/app/data-binding/Operator/LoginPopup/LoginProcessChain/GetCurState';
import ReceiveCommand from '@/src/app/data-binding/Operator/LoginPopup/LoginProcessChain/ReceiveCommand';

export default class Enter extends WindowHandler<'keydown'> {
  eventName: 'keydown' = 'keydown';

  constructor () {
    super();
  }

  async handle (event: KeyboardEvent) {
    if (
      Static.instance.get<LoginPopup>(SYMBOLS.LoginPopup).isFocused
      && Static.instance.get<StateGetter>(SYMBOLS.LoginPopupStateGetter).get() instanceof LoginState
      && event.key === 'Enter'
    ) {
      await this.doStep();
    }
  }

  protected async doStep () {
    const stateGetter = Static.instance.get<GetCurState>(SYMBOLS.GetCurLoginProcessState);
    const nextCommand = stateGetter.state.generateNextCommand();
    if (nextCommand !== undefined) {
      const receiveCommandOperator = Static.instance.get<ReceiveCommand>(SYMBOLS.ReceiveLoginProcessCommand);
      await receiveCommandOperator.receiveCommand(nextCommand);
    }
  }
}
