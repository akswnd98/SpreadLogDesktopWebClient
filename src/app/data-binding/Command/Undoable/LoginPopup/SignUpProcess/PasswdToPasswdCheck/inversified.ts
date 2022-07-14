import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/app/symbols';
import InputWrapper from '@/src/app/App/LoginPopup/Body/Left/Process/SignUpProcess/InputWrapper/inversified';
import PasswdToPasswdCheck from '.';
import SignUpProcess from '@/src/app/App/LoginPopup/Body/Left/Process/SignUpProcess';

@injectable()
export default class Inversified extends PasswdToPasswdCheck {
  constructor (
    @inject(SYMBOLS.SignUpProcessElement) element: SignUpProcess,
    @inject(SYMBOLS.SignUpProcessInputWrapper) inputWrapper: InputWrapper,
  ) {
    super({
      element,
      inputWrapper,
    });
  }
}
