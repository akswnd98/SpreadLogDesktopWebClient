import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Attribute/Handler';
import EmailInput from '..';

export type ConstructorParam = {
  emailInput: EmailInput;
};

export default class FocusOut extends Handler<'focusout'> {
  eventName: 'focusout' = 'focusout';
  emailInput: EmailInput;

  constructor (payload: ConstructorParam) {
    super({
      id: 'input-box',
    });
    this.emailInput = payload.emailInput;
  }

  async handle (event: FocusEvent) {
    const inputBox = this.emailInput.shadowRoot!.getElementById('input-box')! as HTMLInputElement;
    if (inputBox.value === '') {
      inputBox.value = '이메일';
      inputBox.style.color = '#a0a0a0';
      this.emailInput.isDefault = true;
    } else {
      this.emailInput.isDefault = false;
    }
  }
}
