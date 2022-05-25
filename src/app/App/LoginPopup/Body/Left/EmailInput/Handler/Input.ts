import CurrentLoginEmailSetter from '@/src/app/data-binding/Operator/CurrentLoginEmail/Setter';
import Static from '@/src/app/inversify.config';
import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Attribute/Handler';
import EmailInput from '..';
import { SYMBOLS } from '@/src/app/symbols';
import CurrentLoginEmailGetter from '@/src/app/data-binding/Operator/CurrentLoginEmail/Getter';

export type ConstructorParam = {
  emailInput: EmailInput;
};

export default class Input extends Handler<'input'> {
  eventName: 'input' = 'input';
  emailInput: EmailInput;

  constructor (payload: ConstructorParam) {
    super({
      id: 'input-box',
    });
    this.emailInput = payload.emailInput
  }

  async handle (event: Event) {
    const setter = Static.instance.get<CurrentLoginEmailSetter>(SYMBOLS.CurrentLoginEmailSetter);
    setter.set((this.emailInput.shadowRoot!.getElementById('input-box') as HTMLInputElement).value);
  }
}
