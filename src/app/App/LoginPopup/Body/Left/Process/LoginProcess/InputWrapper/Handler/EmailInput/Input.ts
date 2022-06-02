import Setter from '@/src/app/data-binding/Operator/CurrentLoginEmail/Setter';
import Static from '@/src/app/inversify.config';
import { SYMBOLS } from '@/src/app/symbols';
import InputWrapper from '../..';
import RawInput from '../../../../BaseInput/Handler/Input';

export default class Input extends RawInput {
  async handle (event: Event) {
    const setter = Static.instance.get<Setter>(SYMBOLS.CurrentLoginEmailSetter);
    const input = Static.instance.get<InputWrapper>(SYMBOLS.LoginProcessInputWrapper).emailInput;
    setter.set(input.getValue());
  }
}
