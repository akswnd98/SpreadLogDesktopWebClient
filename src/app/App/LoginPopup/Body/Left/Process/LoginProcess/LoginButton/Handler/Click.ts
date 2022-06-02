import ReceiveCommand from '@/src/app/data-binding/Operator/LoginPopup/LoginProcessChain/ReceiveCommand';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';
import GetCurState from '@/src/app/data-binding/Operator/LoginPopup/LoginProcessChain/GetCurState';

@injectable()
export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';

  constructor () {
    super({
      id: 'root',
    });
  }

  async handle (event: HTMLElementEventMap['click']) {
    const stateGetter = Static.instance.get<GetCurState>(SYMBOLS.GetCurLoginProcessState);
    const nextCommand = stateGetter.state.generateNextCommand();
    if (nextCommand !== undefined) {
      const receiveCommandOperator = Static.instance.get<ReceiveCommand>(SYMBOLS.ReceiveLoginProcessCommand);
      await receiveCommandOperator.receiveCommand(nextCommand);
    }
  }
}
