import BaseToPasswd from '.';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import InputWrapper from '@/src/app/App/LoginPopup/Body/Left/Process/LoginProcess/InputWrapper/inversified';

@injectable()
export default class Inversified extends BaseToPasswd {
  constructor (
    @inject(SYMBOLS.LoginProcessInputWrapper) inputWrapper: InputWrapper,
  ) {
    super({
      inputWrapper,
    });
  }
}
