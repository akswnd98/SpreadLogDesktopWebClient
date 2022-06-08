import { SYMBOLS } from '@/src/app/symbols';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import ErrorHandleDecorator from '../BasicErrorHandleDecorator';
import PasswdCheckToNickName from './inversified';

@injectable()
export default class ErrorHandled extends ErrorHandleDecorator {
  constructor (
    @inject(SYMBOLS.SignUpProcessPasswdCheckToNickNameCommand) command: PasswdCheckToNickName,
  ) {
    super({
      command,
      errorDivId: 'passwd-check-error',
    });
  }
}
