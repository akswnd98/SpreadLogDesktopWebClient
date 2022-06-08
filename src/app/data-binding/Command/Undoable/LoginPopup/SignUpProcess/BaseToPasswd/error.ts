import { SYMBOLS } from '@/src/app/symbols';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import ErrorHandleDecorator from '../BasicErrorHandleDecorator';
import BaseToPasswd from './inversified';

@injectable()
export default class ErrorHandled extends ErrorHandleDecorator {
  constructor (
    @inject(SYMBOLS.SignUpProcessBaseToPasswdCommand) command: BaseToPasswd,
  ) {
    super({
      command,
      errorDivId: 'email-error',
    });
  }
}
