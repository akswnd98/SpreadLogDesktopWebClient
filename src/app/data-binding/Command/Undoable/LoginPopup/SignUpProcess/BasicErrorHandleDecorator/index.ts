import StateTransition from '@/src/owl-data-binding/Command/Undoable/StateTransition';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import Left from '@/src/app/App/LoginPopup/Body/Left';
import { SYMBOLS } from '@/src/app/symbols';

export type ConstructorParam = {
  command: StateTransition;
  errorDivId: string;
};

@injectable()
export default class ErrorHandleDecorator extends StateTransition {
  command: StateTransition;
  errorDivId: string;

  constructor (payload: ConstructorParam) {
    super();
    this.command = payload.command;
    this.errorDivId = payload.errorDivId;
  }

  async execute () {
    const errorElement = Static.instance.get<Left>(SYMBOLS.LoginPopupBodyLeft).signUpElement.shadowRoot!.getElementById(this.errorDivId)! as HTMLDivElement;
    try {
      await this.command.execute();
      errorElement.style.display = 'none';
    } catch (e) {
      console.log(e);
      errorElement.style.display = 'block';
      throw Error('SignUpProcessCommand.execute failed');
    }
  }

  async unexecute () {
    await this.command.unexecute();
  }

  generateNextState () {
    return this.command.generateNextState();
  }
}
