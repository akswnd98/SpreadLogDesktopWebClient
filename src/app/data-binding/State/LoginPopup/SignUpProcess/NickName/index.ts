import SignUpProcess from '..';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Static from '@/src/app/inversify.config';
import NickNameToEmailSentCommand from '@/src/app/data-binding/Command/Undoable/LoginPopup/SignUpProcess/NickNameToEmailSent/inversified';
import { SYMBOLS } from '@/src/app/symbols';

@injectable()
export default class NickName extends SignUpProcess {
  generateNextCommand () {
    return Static.instance.get<NickNameToEmailSentCommand>(SYMBOLS.SignUpProcessNickNameToEmailSentCommand);
  }

  async doEsc () {

  }
}
