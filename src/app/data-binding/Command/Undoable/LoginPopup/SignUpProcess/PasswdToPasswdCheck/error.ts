import { SYMBOLS } from '@/src/app/symbols';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import ErrorHandleDecorator from '../BasicErrorHandleDecorator';
import PasswdToPasswdCheck from './inversified';

@injectable()
export default class PasswdToPasswdCheckDecorator extends ErrorHandleDecorator {
  constructor (
    @inject(SYMBOLS.SignUpProcessPasswdToPasswdCheckCommand) command: PasswdToPasswdCheck,
  ) {
    super({
      command,
      errorDivId: 'passwd-error',
    });
  }
}
