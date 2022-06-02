import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import InputWrapper from '@/src/app/App/LoginPopup/Body/Left/Process/SignUpProcess/InputWrapper/inversified';
import PasswdCheckToNickName from '.';

@injectable()
export default class Inversified extends PasswdCheckToNickName {
  constructor (
    @inject(SYMBOLS.SignUpProcessInputWrapper) inputWrapper: InputWrapper,
  ) {
    super({
      inputWrapper,
    });
  }
}
