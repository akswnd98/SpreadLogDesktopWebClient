import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Attribute/Handler';
import EmailInput from '..';

export type ConstructorParam = {
  emailInput: EmailInput;
};

export default class Focus extends Handler<'focus'> {
  eventName: 'focus' = 'focus';
  emailInput: EmailInput;

  constructor (payload: ConstructorParam) {
    super({
      id: 'input-box',
    });
    this.emailInput = payload.emailInput
  }

  async handle (event: FocusEvent) {
    const inputBox = this.emailInput.shadowRoot!.getElementById('input-box')! as HTMLInputElement;
    inputBox.style.color = 'black';
    if (this.emailInput.isDefault) {
      inputBox.value = '';
    }
  }
}
