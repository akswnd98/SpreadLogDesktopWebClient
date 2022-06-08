import StateTransition from '@/src/owl-data-binding/Command/Undoable/StateTransition';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import Left from '@/src/app/App/LoginPopup/Body/Left';
import { SYMBOLS } from '@/src/app/symbols';

export type ConstructorParam = {
  command: StateTransition;
  nicknameErrorDivId: string;
  emailErrorDivId: string;
};

@injectable()
export default class ErrorHandleDecorator extends StateTransition {
  command: StateTransition;
  nicknameErrorDivId: string;
  emailErrorDivId: string;

  constructor (payload: ConstructorParam) {
    super();
    this.command = payload.command;
    this.nicknameErrorDivId = payload.nicknameErrorDivId;
    this.emailErrorDivId = payload.emailErrorDivId;
  }

  async execute () {
    const nicknameErrorElement = Static.instance.get<Left>(SYMBOLS.LoginPopupBodyLeft).signUpElement.shadowRoot!.getElementById(this.nicknameErrorDivId)! as HTMLDivElement;
    const emailErrorElement = Static.instance.get<Left>(SYMBOLS.LoginPopupBodyLeft).signUpElement.shadowRoot!.getElementById(this.emailErrorDivId)! as HTMLDivElement;
    try {
      await this.command.execute();
      nicknameErrorElement.style.display = 'none';
      emailErrorElement.style.display = 'none';
    } catch (e: any) {      
      if (String(e) === 'nickname already exist') {
        nicknameErrorElement.style.display = 'block';
        emailErrorElement.style.display = 'none';
      } else if (String(e) === 'request email cert failed') {
        emailErrorElement.style.display = 'block';
        nicknameErrorElement.style.display = 'none';
      }
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
