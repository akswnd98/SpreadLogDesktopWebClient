import { SYMBOLS } from '@/src/app/symbols';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import ErrorHandleDecorator from '../LastErrorHandleDecorator';
import NicknameToEmailSent from './inversified';

@injectable()
export default class ErrorHandled extends ErrorHandleDecorator {
  constructor (
    @inject(SYMBOLS.SignUpProcessNickNameToEmailSentCommand) command: NicknameToEmailSent,
  ) {
    super({
      command,
      nicknameErrorDivId: 'nickname-error',
      emailErrorDivId: 'email-send-error',
    });
  }
}
