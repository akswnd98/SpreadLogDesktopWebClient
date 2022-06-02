import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import NickNameToSignUpConfermed from '.';
import { SYMBOLS } from '@/src/app/symbols';
import SignUpProcessElement from '@/src/app/App/LoginPopup/Body/Left/Process/SignUpProcess';

@injectable()
export default class Inversified extends NickNameToSignUpConfermed {
  constructor (
    @inject(SYMBOLS.SignUpProcessElement) element: SignUpProcessElement,
  ) {
    super({
      element,
    });
  }
}
